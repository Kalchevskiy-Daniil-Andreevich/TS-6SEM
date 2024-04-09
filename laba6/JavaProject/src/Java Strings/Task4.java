import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Task4 {
    public static void main(String[] args) {
        String text = "This is an example text. It contains several sentences. Each sentence has different letter counts.";

        String[] sentences = text.split("[.!?]\\s*");
        for (String sentence : sentences) {
            System.out.println("Sentence: " + sentence);
            analyzeLetters(sentence);
        }
    }

    public static void analyzeLetters(String sentence) {
        int vowelsCount = 0;
        int consonantsCount = 0;

        Pattern vowelsPattern = Pattern.compile("[aeiouAEIOU]");
        Matcher vowelsMatcher = vowelsPattern.matcher(sentence);
        while (vowelsMatcher.find()) {
            vowelsCount++;
        }

        Pattern consonantsPattern = Pattern.compile("[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]");
        Matcher consonantsMatcher = consonantsPattern.matcher(sentence);
        while (consonantsMatcher.find()) {
            consonantsCount++;
        }

        if (vowelsCount > consonantsCount) {
            System.out.println("More vowels: " + vowelsCount + " vowels, " + consonantsCount + " consonants");
        } else if (consonantsCount > vowelsCount) {
            System.out.println("More consonants: " + consonantsCount + " consonants, " + vowelsCount + " vowels");
        } else {
            System.out.println("Equal number of vowels and consonants: " + vowelsCount);
        }
    }
}
