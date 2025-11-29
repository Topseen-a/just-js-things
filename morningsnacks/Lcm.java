import java.util.Scanner;
    public class Lcm{
        public static void main (String[] args){

        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int numberOne = input.nextInt();

        System.out.print("Enter another number: ");
        int numberTwo = input.nextInt();

        int lcm = numberOne;
    
        if (numberTwo > lcm){
            lcm = numberTwo;
            }

        while (true) {
            if (lcm % numberOne == 0 && lcm % numberTwo == 0) {
                break;
                }
            lcm++;    
            }
        System.out.println("Lcm of " + numberOne + " and " + numberTwo + " is " + lcm);

        }
    }
