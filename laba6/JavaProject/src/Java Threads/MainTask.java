import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.*;

class Auction {
    private final int numberOfLots;
    private final List<Lot> lots;
    private final ExecutorService executorService;

    Auction(int numberOfLots, int numberOfParticipants) {
        this.numberOfLots = numberOfLots;
        this.lots = new ArrayList<>(numberOfLots);
        this.executorService = Executors.newFixedThreadPool(numberOfParticipants);
        for (int i = 0; i < numberOfLots; i++) {
            lots.add(new Lot());
        }
    }

    void startAuction() {
        for (Lot lot : lots) {
            Future<Participant> winner = executorService.submit(lot);
            try {
                Participant winningParticipant = winner.get(10, TimeUnit.SECONDS);
                System.out.println("Winner for Lot " + lot.lotNumber + ": " + winningParticipant.getName());
            } catch (InterruptedException | ExecutionException | TimeoutException e) {
                System.out.println("No winner for Lot " + lot.lotNumber + " within time limit.");
            }
        }
        executorService.shutdown();
    }

    void makeBid(int lotIndex, Participant participant) {
        if (lotIndex >= 0 && lotIndex < lots.size()) {
            lots.get(lotIndex).makeBid(participant);
        } else {
            System.out.println("Invalid lot index: " + lotIndex);
        }
    }

    static class Lot implements Callable<Participant> {
        private static int lotCount = 0;
        private final int lotNumber;
        private final List<Participant> participants;
        private Participant winner;

        Lot() {
            this.lotNumber = ++lotCount;
            this.participants = new ArrayList<>();
        }

        void makeBid(Participant participant) {
            participants.add(participant);
        }

        @Override
        public Participant call() {
            Random random = new Random();
            while (participants.isEmpty()) {
                try {
                    Thread.sleep(random.nextInt(1000));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            winner = participants.get(random.nextInt(participants.size()));
            return winner;
        }
    }
}

class Participant {
    private final String name;

    Participant(String name) {
        this.name = name;
    }

    String getName() {
        return name;
    }
}

public class MainTask {
    public static void main(String[] args) {
        Auction auction = new Auction(5, 10); // 5 lots, 10 participants
        for (int i = 0; i < 10; i++) {
            Participant participant = new Participant("Participant " + (i + 1));
            for (int j = 0; j < 5; j++) {
                auction.makeBid(j, participant); // Используем метод makeBid для добавления ставки на конкретный лот
            }
        }
        auction.startAuction();
    }
}
