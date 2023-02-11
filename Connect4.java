import java.util.Scanner;

class Connect4 {
    
  	/* main game loop */
  	public static void main(String[] args) {
    
    	int[][] board = new int[6][7];
    	int turn = 1;
    	int[] filled = new int[7];
    	Scanner input = new Scanner(System.in);
    
        while (true) {

            /* print board and ask for input*/
            display(board);
            while (true) {
                System.out.println("\nenter collumn to drop piece:");
                int col = Integer.parseInt(input.nextLine());
                if (filled[col-1] < 6) {
                    board[5 - filled[col-1]][col-1] = turn;
                    filled[col-1] ++;
                    break;
                }
            }
            
            /* checks for win */
            if (isWon(board) == 1) {
                display(board);
                System.out.println("\nplayer 1 won");
                break;
            } else if (isWon(board) == -1) {
                display(board);
                System.out.println("\nplayer 2 won");
                break;
            } turn *= -1; 
        }
  
    }

    /* checks if any player has won */
    public static int isWon(int[][] b /* board */) {

        /* checks if player has won vert */
        for (int r = 3;r < 6;r++) { for (int c = 0;c < 7;c++) {
            if (b[r][c] == b[r-1][c] && b[r][c] == b[r-2][c] && b[r][c] == b[r-3][c] && b[r][c] != 0) {
                return b[r][c];
            } 
        }}

        /* checks if plyer has won horz */
        for (int r = 0;r < 6;r++) { for (int c = 3;c < 7;c++) {
            if (b[r][c] == b[r][c-1] && b[r][c] == b[r][c-2] && b[r][c] == b[r][c-3] && b[r][c] != 0) {
                return b[r][c];
            } 
        }}

        /* checks if plyer has won diag down-left */
        for (int r = 3;r < 6;r++) { for (int c = 3;c < 7;c++) {
            if (b[r][c] == b[r-1][c-1] && b[r][c] == b[r-2][c-2] && b[r][c] == b[r-3][c-3] && b[r][c] != 0) {
                return b[r][c];
            }
        }}

        /* checks if plyer has won diag down-right */
        for (int r = 3;r < 6;r++) { for (int c = 0;c < 4;c++) {
            if (b[r][c] == b[r-1][c+1] && b[r][c] == b[r-2][c+2] && b[r][c] == b[r-3][c+3] && b[r][c] != 0) {
                return b[r][c];
            } 
        }}

        /* checks if player has won diag up-right */
        for (int r = 0; r < 3; r++) { for (int c = 3; c < 7; c++) {
            if (b[r][c] == b[r+1][c-1] && b[r][c] == b[r+2][c-2] && b[r][c] == b[r+3][c-3] && b[r][c] != 0) {
                return b[r][c];
            }
        }}
          
        /* checks if player has won diag up-left */
        for (int r = 0; r < 3; r++) { for (int c = 0; c < 4; c++) {
            if (b[r][c] == b[r+1][c+1] && b[r][c] == b[r+2][c+2] && b[r][c] == b[r+3][c+3] && b[r][c] != 0) {
                return b[r][c];
            }
        }}

        return 0;
    
    }

    /* prints out board */
    public static void display(int[][] b) {

        System.out.print("\033[H\033[2J");
        System.out.flush();
        for (int r = 0;r < 6;r++) {
            System.out.println("");
            for (int c = 0;c < 7;c++) {
                if (b[r][c] == 1) {
                    System.out.print("|\033[41m   \033[49m|");
                } else if (b[r][c] == -1) {
                    System.out.print("|\033[44m   \033[49m|");
                } else {
                    System.out.print("|   |");
                }
            }
        }
    }
}