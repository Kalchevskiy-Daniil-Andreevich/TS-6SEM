public class Task3 {
    public static void main(String[] args) {
        String text = "this is an example text. it contains several sentences. each sentence starts on a new line.";
        String transformedText = capitalizeSentences(text);
        System.out.println(transformedText);
    }

    public static String capitalizeSentences(String text) {
        StringBuilder result = new StringBuilder();
        boolean capitalizeNext = true;

        for (char ch : text.toCharArray()) {
            if (capitalizeNext && Character.isLetter(ch)) {
                result.append(Character.toUpperCase(ch));
                capitalizeNext = false;
            } else {
                result.append(ch);
            }

            if (ch == '.' || ch == '!' || ch == '?') {
                capitalizeNext = true;
            }
        }

        return result.toString();
    }
}
