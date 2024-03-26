import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Student {
    private String name;
    private List<Double> grades;

    public Student(String name) {
        this.name = name;
        this.grades = new ArrayList<>();
    }

    public void addGrade(double grade) {
        if (grade < 0 || grade > 10) {
            throw new IllegalArgumentException("Grade must be between 0 and 10");
        }
        grades.add(grade);
    }

    public List<Double> getGrades() {
        return grades;
    }

    public double calculateAverageGrade() {
        if (grades.isEmpty()) {
            throw new IllegalStateException("Student has no grades");
        }
        double sum = 0;
        for (Double grade : grades) {
            sum += grade;
        }
        return sum / grades.size();
    }
}

class Group {
    private String name;
    private List<Student> students;

    public Group(String name) {
        this.name = name;
        this.students = new ArrayList<>();
    }

    public void addStudent(Student student) {
        students.add(student);
    }

    public double calculateAverageGradeForSubject(String subject) {
        if (students.isEmpty()) {
            throw new IllegalStateException("Group has no students");
        }
        double sum = 0;
        int count = 0;
        for (Student student : students) {
            for (Double grade : student.getGrades()) {
                if (grade != null && grade >= 0 && grade <= 10) {
                    sum += grade;
                    count++;
                }
            }
        }
        return count == 0 ? 0 : sum / count;
    }
}

class Faculty {
    private String name;
    private Map<String, Group> groups;

    public Faculty(String name) {
        this.name = name;
        this.groups = new HashMap<>();
    }

    public void addGroup(String groupName) {
        groups.put(groupName, new Group(groupName));
    }

    public Group getGroup(String groupName) {
        return groups.get(groupName);
    }

    public double calculateAverageGradeForSubject(String subject) {
        double sum = 0;
        int count = 0;
        for (Group group : groups.values()) {
            sum += group.calculateAverageGradeForSubject(subject);
            count++;
        }
        return count == 0 ? 0 : sum / count;
    }
}

class University {
    private Map<String, Faculty> faculties;

    public University() {
        this.faculties = new HashMap<>();
    }

    public void addFaculty(String facultyName) {
        faculties.put(facultyName, new Faculty(facultyName));
    }

    public Faculty getFaculty(String facultyName) {
        return faculties.get(facultyName);
    }

    public double calculateAverageGradeForSubject(String subject) {
        double sum = 0;
        int count = 0;
        for (Faculty faculty : faculties.values()) {
            sum += faculty.calculateAverageGradeForSubject(subject);
            count++;
        }
        return count == 0 ? 0 : sum / count;
    }
}

public class Task {
    public static void main(String[] args) {
        University university = new University();

        university.addFaculty("Faculty of Information Technology");
        Faculty itFaculty = university.getFaculty("Faculty of Information Technology");

        itFaculty.addGroup("Group 101");
        Group group101 = itFaculty.getGroup("Group 101");

        Student student1 = new Student("Ivanov");
        student1.addGrade(8.5);
        student1.addGrade(7.0);
        group101.addStudent(student1);

        Student student2 = new Student("Petrov");
        student2.addGrade(9.0);
        student2.addGrade(8.0);
        group101.addStudent(student2);

        System.out.println("Average grade for student Ivanov: " + student1.calculateAverageGrade());

        System.out.println(
                "Average grade for subject in group 101: " + group101.calculateAverageGradeForSubject("Math"));

        System.out.println(
                "Average grade for subject in faculty: " + itFaculty.calculateAverageGradeForSubject("Math"));

        System.out.println("Average grade for subject in university: "
                + university.calculateAverageGradeForSubject("Math"));
    }
}
