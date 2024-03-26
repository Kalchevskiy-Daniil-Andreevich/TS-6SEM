import java.util.Arrays;

public class Task2 {
    public static void main(String[] args) {
        String text = "an example text to sort words in alphabetical order";
        String[] words = text.split("\\s+");
        Arrays.sort(words);

        System.out.println("Words in alphabetical order:");
        for (String word : words) {
            System.out.println(word);
        }
    }
}
