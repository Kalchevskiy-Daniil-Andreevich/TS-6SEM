public class Task1 {
    public static void main(String[] args) {
        String text = "This text contains numbers: 123 and 456. And also one more: 7890";
        int sum = findDigitsSum(text);
        System.out.println("Sum of all occurring digits: " + sum);
    }

    public static int findDigitsSum(String text) {
        int sum = 0;
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (Character.isDigit(c)) {
                int digit = Character.getNumericValue(c);
                sum += digit;
            }
        }
        return sum;
    }
}
