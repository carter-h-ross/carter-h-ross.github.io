import java.util.Scanner;

class NewLanguage {
  
    public static void main(String[] args) {
        String program = """

        +|72|
        >+|101|
        >+|108|
        >+|108|
        >+|111|
        >+|32|
        >+|119|
        >+|111|
        >+|114|
        >+|108|
        >+|100|
        >+|33|
        <|11|^|12|
      
        """.replaceAll("\\s+","");
        int memorySize = 20;
        run(program,memorySize);
    }

    private static void run(String code,int size) {

        boolean debug = false;
        int[] mem = new int [size];
        String[] str = new String [size];
        int loc = 0;
        String repStr = "";
        int rep = 0;
        String mode = "int";
        char[] coms = code.toCharArray();
        Scanner input = new Scanner(System.in);
        
        for (int i = 0;i < coms.length;i++) {
            rep = 0;
            repStr = "";
            switch (coms[i]) {

                // moving memory pointer forward
                case '>':
                    if (coms[i + 1] == '|') {
                        i += 2;
                        while (coms[i] != '|') {
                            repStr += coms[i];
                            i++; // add to initial loop
                        }
                        rep = Integer.parseInt(repStr);
                        if (loc + rep < size) {
                            loc += rep;
                        } else {
                            error(coms[i],"trying to move memory above memory size value, which is " + size,i);
                        }
                    } else {
                        if (loc < size - 1) {
                            loc ++;
                        } else {
                            error(coms[i],"trying to move memory above memory size value, which is " + size,i);
                        }
                    }
                    break;
                
                case '<':
                    if (coms[i + 1] == '|') {
                        i += 2;
                        while (coms[i] != '|') {
                            repStr += coms[i];
                            i++; // add to initial loop
                        }
                        rep = Integer.parseInt(repStr);
                        if (loc - rep > -1) {
                            loc -= rep;
                        } else {
                            error(coms[i],"trying to move memory below zero",i);
                        }
                    } else {
                        if (loc > 0) {
                            loc --;
                        } else {
                            error(coms[i],"trying to move memory below zero",i);
                        }
                    }
                    break;

                case '+':
                    if (mode == "int") {
                        if (coms[i + 1] == '|') {
                            i += 2;
                            while (coms[i] != '|') {
                                repStr += coms[i];
                                i++; // add to initial loop
                            }
                            rep = Integer.parseInt(repStr);
                            mem[loc] += rep;
                        } else {
                            mem[loc]++;
                        }
                    } else {
                        error(coms[i],"in str mode when you should be in int mode",i);
                    }
                    break;

                case '-':
                    if (mode == "int") {
                        if (coms[i + 1] == '|') {
                            i += 2;
                            while (coms[i] != '|') {
                                repStr += coms[i];
                                i++; // add to initial loop
                            }
                            rep = Integer.parseInt(repStr);
                            mem[loc] -= rep;
                        } else {
                            mem[loc]--;
                        }
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
                    break;

                case '?':
                    if (mode == "str") {
                        System.out.println("enter a string");
                        str[loc] = input.nextLine();
                    } else {
                        System.out.println("enter an integer");
                        mem[loc] = Integer.parseInt(input.nextLine());
                    }
                    break;

                case '^':
                    if (coms[i + 1] == '|') {
                        i += 2;
                        while (coms[i] != '|') {
                            repStr += coms[i];
                            i++; // add to initial loop
                        }
                        rep = Integer.parseInt(repStr);
                        if (mode == "int") {
                            for (int j = 0; j < rep; j++) {
                                System.out.print((char) mem[loc]);
                                loc++;
                            }
                        } else {
                            for (int j = 0; j < rep; j++) {
                                System.out.print(str[loc]);
                                loc++;
                            }
                        }
                    } else {
                        if (mode == "int"){
                            System.out.print((char) mem[loc]);
                        } else {
                            System.out.print(str[loc]);
                        }
                    }
                    break;

                case '.':
                    System.out.print("\n");
                    break;

                default:
                    error(coms[i], "illegal charachter", i);
                    break;
                    
            }
        }

        if (debug) {
            System.out.println("\n" + code + " | size: " + size + "\n");
            for (int i = 0;i < size;i++) {
            System.out.println("mem[" + i + "] : " + mem[i]);
            }
            for (int i = 0;i < size;i++) {
            System.out.println("str[" + i + "] : " + str[i]);
            }
        }
        
    }

    private static void error(char command, String message, int errorLoc) {
        System.out.println(command + " : " + message + " at code charachter: " + errorLoc);
    }
  
}