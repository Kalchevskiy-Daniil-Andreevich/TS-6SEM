import java.util.*;

class Book {
    private int id;
    private String title;
    private String[] authors;
    private String publisher;
    private int year;
    private int pageCount;
    private double price;
    private String bindingType;

    public Book(int id, String title, String[] authors, String publisher, int year, int pageCount, double price,
            String bindingType) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.publisher = publisher;
        this.year = year;
        this.pageCount = pageCount;
        this.price = price;
        this.bindingType = bindingType;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setAuthors(String[] authors) {
        this.authors = authors;
    }

    public String[] getAuthors() {
        return authors;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public void setBindingType(String bindingType) {
        this.bindingType = bindingType;
    }

    public String getBindingType() {
        return bindingType;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", authors=" + Arrays.toString(authors) +
                ", publisher='" + publisher + '\'' +
                ", year=" + year +
                ", pageCount=" + pageCount +
                ", price=" + price +
                ", bindingType='" + bindingType + '\'' +
                '}';
    }
}

public class Task1 {
    public static void main(String[] args) {
        Book[] books = {
                new Book(1, "Java Programming", new String[] { "John Doe" }, "ABC Publications", 2020, 400, 25.99,
                        "Hardcover"),
                new Book(2, "Python Basics", new String[] { "Jane Smith" }, "XYZ Books", 2019, 300, 19.99, "Paperback"),
                new Book(3, "C++ Fundamentals", new String[] { "John Doe", "Alice Johnson" }, "ABC Publications", 2021,
                        450, 29.99, "Hardcover"),
                new Book(4, "Web Development with JavaScript", new String[] { "Bob Brown" }, "XYZ Books", 2022, 350,
                        24.99, "Paperback")
        };

        String author = "John Doe";
        System.out.println("Books by author " + author + ":");
        printBooksByAuthor(books, author);

        String publisher = "ABC Publications";
        System.out.println("\nBooks by publisher " + publisher + ":");
        printBooksByPublisher(books, publisher);

        int year = 2020;
        System.out.println("\nBooks published after " + year + ":");
        printBooksPublishedAfterYear(books, year);
    }

    public static void printBooksByAuthor(Book[] books, String author) {
        for (Book book : books) {
            for (String a : book.getAuthors()) {
                if (a.equals(author)) {
                    System.out.println(book);
                    break;
                }
            }
        }
    }

    public static void printBooksByPublisher(Book[] books, String publisher) {
        for (Book book : books) {
            if (book.getPublisher().equals(publisher)) {
                System.out.println(book);
            }
        }
    }

    public static void printBooksPublishedAfterYear(Book[] books, int year) {
        for (Book book : books) {
            if (book.getYear() > year) {
                System.out.println(book);
            }
        }
    }
}
