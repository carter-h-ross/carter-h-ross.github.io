import java.util.Scanner;

class NewLanguage {
  
    public static void main(String[] args) {
        String program = """

            +
            >++
            >+++
            >++++
            >+++++
            >++++++
            >+++++++
            >++++++++
            ===
      
        """.replaceAll("\\s+","");
        int memorySize = 8;
        run(program,memorySize);
    }

    private static void run(String code,int size) {

        System.out.println(code + " | size: " + size);
        int[] mem = new int [size];
        String[] str = new String [size];
        int loc = 0;
        String mode = "int";
        char[] coms = code.toCharArray();
        Scanner input = new Scanner(System.in); 
        
        for (int i = 0;i < coms.length;i++) {
        switch (coms[i]) {
            case '>':
                if (loc < size - 1) {
                    loc ++;
                } else {
                    error(coms[i],"trying to move memory above memory size value, which is " + size,i);
                }
            break;
            
            case '<':
                if (loc > 0) {
                    loc --;
                } else {
                    error(coms[i],"trying to move memory location below 0",i);
                }
            break;

            case '+':
                if (mode == "int") {
                    mem[loc] ++;
                } else {
                    error(coms[i],"in str mode when you should be in int mode",i);
                }
            break;

            case '-':
                if (mode == "int") {
                    mem[loc] --;
                } else {
                    error(coms[i],"in str mode when you should be in int mode",i);
                }
                break;

            case '=':
                if (mode == "int") {
                    mode = "str";
                } else {
                    mode = "int";
                }
                

            case '?':
                if (mode == "str") {
                    str[loc] = input.nextLine();
                }
                break;

            default:
                error(coms[i], "illegal charachter", i);
                break;
        }
        }

        for (int i = 0;i < size;i++) {
        System.out.println("mem[" + i + "] : " + mem[i]);
        }
        for (int i = 0;i < size;i++) {
        System.out.println("str[" + i + "] : " + str[i]);
        }
        
    }

    private static void error(char command, String message, int errorLoc) {
        System.out.println(command + " : " + message + " at code charachter: " + errorLoc);
    }
  
}
