import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Task6 {
    public static void main(String[] args) {
        String filename = "task6.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] tokens = line.split("\\s+");
                for (String token : tokens) {
                    if (isInteger(token)) {
                        System.out.println(token + " is an integer.");
                    } else if (isFloat(token)) {
                        System.out.println(token + " is a floating point number.");
                    } else if (isWord(token)) {
                        System.out.println(token + " is a word.");
                    } else if (isCharacter(token)) {
                        System.out.println(token + " is a character.");
                    } else {
                        System.out.println(token + " is unrecognized.");
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static boolean isInteger(String s) {
        try {
            Integer.parseInt(s);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private static boolean isFloat(String s) {
        try {
            Float.parseFloat(s);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private static boolean isWord(String s) {
        return s.matches("[a-zA-Z]+");
    }

    private static boolean isCharacter(String s) {
        return s.length() == 1 && Character.isLetter(s.charAt(0));
    }
}
