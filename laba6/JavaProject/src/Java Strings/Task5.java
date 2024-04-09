public class Task5 {
    public static String removeTextBetweenSymbols(String text, char startSymbol, char endSymbol) {
        StringBuilder result = new StringBuilder();
        boolean insideSymbols = false;

        for (char c : text.toCharArray()) {
            if (c == startSymbol) {
                insideSymbols = true;
                continue;
            }
            if (c == endSymbol) {
                insideSymbols = false;
                continue;
            }
            if (!insideSymbols) {
                result.append(c);
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String text = "This is (some text) that *needs to be processed*.";
        char startSymbol = '(';
        char endSymbol = ')';

        String processedText = removeTextBetweenSymbols(text, startSymbol, endSymbol);
        System.out.println(processedText);
    }
}
