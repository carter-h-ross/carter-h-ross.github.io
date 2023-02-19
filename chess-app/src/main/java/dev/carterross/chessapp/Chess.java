package dev.carterross.chessapp;

import javafx.application.Application;
import javafx.stage.Stage;
/* import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.geometry.Pos;
import javafx.event.EventHandler;
import javafx.event.ActionEvent; */

import java.util.HashMap;
import java.util.ArrayList;
import java.util.Arrays;

public class Chess extends Application {

    public static HashMap<String,Character> imgs = new HashMap<>();
    static {
        imgs.put("wp",'♙');
        imgs.put("wn",'♘');
        imgs.put("wb",'♗');
        imgs.put("wr",'♖');
        imgs.put("wq",'♕');
        imgs.put("wk",'♔');
        imgs.put("bp",'♟');
        imgs.put("bn",'♞');
        imgs.put("bb",'♝');
        imgs.put("br",'♜');
        imgs.put("bq",'♛');
        imgs.put("bk",'♚');
    }

    // all of the board spaces (default backgound color, row, column, piece id)
    public static Spot[][] board = {
            // row 0
            {new Spot('w',0,0,"br"),new Spot('b',0,1,"bn"),new Spot('w',0,2,"bb"),new Spot('b',0,3,"bk"),
                    new Spot('w',0,4,"bq"),new Spot('b',0,5,"bb"),new Spot('w',0,6,"bn"),new Spot('b',0,7,"br")},
            // row 1
            {new Spot('b',1,0,"yp"),new Spot('w',1,1,"yp"),new Spot('b',1,2,"yp"),new Spot('w',1,3,"yp"),
                    new Spot('b',1,4,"yp"),new Spot('w',1,5,"yp"),new Spot('b',1,6,"yp"),new Spot('w',1,7,"yp")},
            // row 2
            {new Spot('w',2,0,"-="),new Spot('b',2,1,"-="),new Spot('w',2,2,"-="),new Spot('b',2,3,"-="),
                    new Spot('w',2,4,"-="),new Spot('b',2,5,"-="),new Spot('w',2,6,"-="),new Spot('b',2,7,"-=")},
            // row 3
            {new Spot('b',3,0,"-="),new Spot('w',3,1,"-="),new Spot('b',3,2,"-="),new Spot('w',3,3,"-="),
                    new Spot('b',3,4,"-="),new Spot('w',3,5,"-="),new Spot('b',3,6,"-="),new Spot('w',3,7,"-=")},
            // row 4
            {new Spot('w',4,0,"-="),new Spot('b',4,1,"-="),new Spot('w',4,2,"-="),new Spot('b',4,3,"-="),
                    new Spot('w',4,4,"-="),new Spot('b',4,5,"-="),new Spot('w',4,6,"-="),new Spot('b',4,7,"-=")},
            // row 5
            {new Spot('b',5,0,"-="),new Spot('w',5,1,"-="),new Spot('b',5,2,"-="),new Spot('w',5,3,"-="),
                    new Spot('b',5,4,"-="),new Spot('w',5,5,"-="),new Spot('b',5,6,"-="),new Spot('w',5,7,"-=")},
            // row 6
            {new Spot('w',6,0,"wp"),new Spot('b',6,1,"wp"),new Spot('w',6,2,"wp"),new Spot('b',6,3,"wp"),
                    new Spot('w',6,4,"wp"),new Spot('b',6,5,"wp"),new Spot('w',6,6,"wp"),new Spot('b',6,7,"wp")},
            // row 7
            {new Spot('b',7,0,"wr"),new Spot('w',7,1,"wn"),new Spot('b',7,2,"wb"),new Spot('w',7,3,"wq"),
                    new Spot('b',7,4,"wk"),new Spot('w',7,5,"wb"),new Spot('b',7,6,"wn"),new Spot('w',7,7,"wr")}
    };

    public static Spot[][] debugBoard = {
            // row 0
            {new Spot('w',0,0,"-="),new Spot('b',0,1,"-="),new Spot('w',0,2,"-="),new Spot('b',0,3,"-="),
                    new Spot('w',0,4,"-="),new Spot('b',0,5,"-="),new Spot('w',0,6,"-="),new Spot('b',0,7,"-=")},
            // row 1
            {new Spot('b',1,0,"-="),new Spot('w',1,1,"-="),new Spot('b',1,2,"-="),new Spot('w',1,3,"-="),
                    new Spot('b',1,4,"-="),new Spot('w',1,5,"-="),new Spot('b',1,6,"-="),new Spot('w',1,7,"-=")},
            // row 2
            {new Spot('w',2,0,"-="),new Spot('b',2,1,"-="),new Spot('w',2,2,"-="),new Spot('b',2,3,"-="),
                    new Spot('w',2,4,"-="),new Spot('b',2,5,"-="),new Spot('w',2,6,"-="),new Spot('b',2,7,"-=")},
            // row 3
            {new Spot('b',3,0,"-="),new Spot('w',3,1,"-="),new Spot('b',3,2,"-="),new Spot('w',3,3,"-="),
                    new Spot('b',3,4,"-="),new Spot('w',3,5,"-="),new Spot('b',3,6,"-="),new Spot('w',3,7,"-=")},
            // row 4
            {new Spot('w',4,0,"-="),new Spot('b',4,1,"-="),new Spot('w',4,2,"-="),new Spot('b',4,3,"-="),
                    new Spot('w',4,4,"-="),new Spot('b',4,5,"-="),new Spot('w',4,6,"-="),new Spot('b',4,7,"-=")},
            // row 5
            {new Spot('b',5,0,"-="),new Spot('w',5,1,"-="),new Spot('b',5,2,"-="),new Spot('w',5,3,"-="),
                    new Spot('b',5,4,"-="),new Spot('w',5,5,"-="),new Spot('b',5,6,"-="),new Spot('w',5,7,"-=")},
            // row 6
            {new Spot('w',6,0,"-="),new Spot('b',6,1,"-="),new Spot('w',6,2,"-="),new Spot('b',6,3,"-="),
                    new Spot('w',6,4,"-="),new Spot('b',6,5,"-="),new Spot('w',6,6,"-="),new Spot('b',6,7,"-=")},
            // row 7
            {new Spot('b',7,0,"-="),new Spot('w',7,1,"-="),new Spot('b',7,2,"-="),new Spot('w',7,3,"-="),
                    new Spot('b',7,4,"-="),new Spot('w',7,5,"-="),new Spot('b',7,6,"-="),new Spot('w',7,7,"-=")}
    };

    @Override
    public void start(Stage primaryStage) {
        System.out.println("started");
    }

    public static void main(String[] args) {
        System.out.println(board[7][6].findMoves(board));
        launch(args);
    }

}

class Spot {

    private char back;
    private int r;
    private int c;
    private char team;
    private char opp;
    private char piece;
    private String id;

    public Spot(char back, int r, int c, String id) {
        this.back = back;
        this.r = r;
        this.c = c;
        this.team = id.charAt(0);
        if (team == 'w') {
            this.opp = 'b';
        } else {
            this.opp = 'w';
        }
        this.piece = id.charAt(1);
        this.id = id;
    }

    public char getBack() {
        return back;
    }

    public int getR(){
        return r;
    }

    public int getC() {
        return c;
    }

    public char getPiece() {
        return piece;
    }

    public char getTeam() {
        return team;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
        this.team = id.charAt(0);
        this.piece = id.charAt(1);
    }

    public boolean isCheck(Spot[][] board) {

        // checks if pawn will make check
        if (team == 'w') {
            if (r > 0 && c > 0) {
                if (board[r-1][c-1].getId() == "bp") /* up left */ {
                    return true;
                }
            }
            if (r > 0 && c < 7) {
                if (board[r-1][c+1].getId() == "bp") /* up right */ {
                    return true;
                }
            }
        } else {
            if (r < 7 && c > 0) {
                if (board[r+1][c-1].getId() == "wp") /* down left */ {
                    return true;
                }
            }
            if (r < 7 && c < 7) {
                if (board[r+1][c+1].getId() == "wp") /* down right */ {
                    return true;
                }
            }
        }

        // checks if knight will make check
        if (r < 6 && c < 7) {
            if (board[r+1][c+2].getId() == opp + "n") /* down 1 right 2 */ {
                return true;
            }
        }
        if (r < 7 && c < 6) {
            if (board[r+2][c+1].getId() == opp + "n") /* down 2 right 1 */ {
                return true;
            }
        }
        if (r < 6 && c > 0) {
            if (board[r+2][c-1].getId() == opp + "n") /* down 2 left 1 */ {
                return true;
            }
        }
        if (r < 7 && c > 0) {
            if (board[r+1][c-2].getId() == opp + "n") /* down 1 left 2 */ {
                return true;
            }
        }
        if (r > 0 && c > 1) {
            if (board[r-1][c-2].getId() == opp + "n") /* up 1 left 2 */ {
                return true;
            }
        }
        if (r > 1 && c > 0) {
            if (board[r-2][c-1].getId() == opp + "n") /* up 2 left 1 */ {
                return true;
            }
        }
        if (r > 1 && c < 7) {
            if (board[r-2][c+1].getId() == opp + "n") /* up 2 right 1 */ {
                return true;
            }
        }
        if (r > 0 && c < 6) {
            if (board[r-1][c+2].getId() == opp + "n") /* up 1 right 2 */ {
                return true;
            }
        }

        // checks if rook will make check or queen in rook directions
        for (int i = c+1;i < 8;i++) /* right */ {
            if (board[r][i].getTeam() == team) {
                break;
            }
            if (board[r][i].getId() == opp + "r" || board[r][i].getId() == opp + "q") {
                return true;
            }
        }
        for (int i = r+1;i < 8;i++) /* down */ {
            if (board[i][c].getTeam() == team) {
                break;
            }
            if (board[i][c].getId() == opp + "r" || board[i][c].getId() == opp + "q") {
                return true;
            }
        }
        for (int i = c-1;c > -1;i--) /* left */ {
            if (board[r][i].getTeam() == team) {
                break;
            }
            if (board[r][i].getId() == opp + "r" || board[r][i].getId() == opp + "q") {
                return true;
            }
        }
        for (int i = r+1;i < 8;i++) /* up */ {
            if (board[i][c].getTeam() == team) {
                break;
            }
            if (board[i][c].getId() == opp + "r" || board[i][c].getId() == opp + "q") {
                return true;
            }
        }

        // checks if bishop will make check or queen in bishop directions
        for (int i = 1;i < 8;i++) /* down right */ {
            if ((i + r > 7 || i + c > 7) || (board[r+i][c+i].getTeam() == team)) {
                break;
            }
            if (board[r+i][c+i].getId() == opp + "b") {
                return true;
            }
        }
        for (int i = 1;i < 8;i++) /* down left */ {
            if ((i + r > 7 || i - c < 0) || (board[r+i][c+i].getTeam() == team)) {
                break;
            }
            if (board[r+i][c-i].getId() == opp + "b" || board[r+i][c-i].getId() == opp + "q") {
                return true;
            }
        }
        for (int i = 1;i < 8;i++) /* up left */ {
            if ((i - r < 0 || i - c < 0) || (board[r+i][c+i].getTeam() == team)) {
                break;
            }
            if (board[r-i][c-i].getId() == opp + "b" || board[r-i][c-i].getId() == opp + "q") {
                return true;
            }
        }
        for (int i = 1;i < 8;i++) /* up right */ {
            if ((i - r < 0 || i + c > 7) || (board[r+i][c+i].getTeam() == team)) {
                break;
            }
            if (board[r-i][c+i].getId() == opp + "b" || board[r-i][c+i].getId() == opp + "q") {
                return true;
            }
        }

        // checks if king will make check
        if (r < 7 && c < 7) {
            if (board[r+1][c+1].getId() == opp + "k") /* down right */ {
                return true;
            }
        }
        if (r < 7) {
            if (board[r+1][c].getId() == opp + "k") /* down */ {
                return true;
            }
        }
        if (r < 7 && c > 0) {
            if (board[r+1][c-1].getId() == opp + "k") /* down left */ {
                return true;
            }
        }
        if (c > 0) {
            if (board[r][c-1].getId() == opp + "k") /* left */{
                return true;
            }
        }
        if (r > 0 && c > 0) {
            if (board[r-1][c-1].getId() == opp + "k") /* up left */ {
                return true;
            }
        }
        if (r > 0) {
            if (board[r-1][c].getId() == opp + "k") /* up */{
                return true;
            }
        }
        if (r > 0 && c < 7) {
            if (board[r-1][c+1].getId() == opp + "k") /* up right */{
                return true;
            }
        }
        if (c < 7) {
            if (board[r][c+1].getId() == opp + "k") /* right */ {
                return true;
            }
        }

        return false;
    } // end of isCheck function

    // finds the moves for a location of the board sent in as argument
    public ArrayList<ArrayList<Integer>> findMoves(Spot[][] board) {

        ArrayList<ArrayList<Integer>> moves = new ArrayList<ArrayList<Integer>>();

        // finds moves for pawns
        if (id == "wp") /* finds moves for white pawns */ {
            if (board[r-1][c].getTeam() == '-') /* up 1 */ {
                moves.add(new ArrayList<Integer>(Arrays.asList(r-1,c)));
            }
            if (c < 7) {
                if (board[r-1][c-1].getTeam() == opp) /* up 1 left 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r-1,c-1)));
                }
            }
            if (c > 0) {
                if (board[r-1][c+1].getTeam() == opp) /* up 1 right 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r-1,c+1)));
                }
            }
            if (c == 6 && board[r-2][c].getTeam() == '-') /* up 2 in origional position */ {
                moves.add(new ArrayList<Integer>(Arrays.asList(r-2,c)));
            }
        }
        if (board[r][c].getId() == "bp") /* finds moves for black pawns */ {
            if (board[r+1][c].getTeam() == '-') /* down 1 */ {
                moves.add(new ArrayList<Integer>(Arrays.asList(r+1,c)));
            }
            if (c < 7) {
                if (board[r+1][c-1].getTeam() == opp) /* down 1 left 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r-1,c-1)));
                }
            }
            if (c > 0) {
                if (board[r+1][c+1].getTeam() == opp) /* down 1 right 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r-1,c+1)));
                }
            }
            if (c == 6 && board[r+2][c].getTeam() == '-') /* down 2 in origional position */ {
                moves.add(new ArrayList<Integer>(Arrays.asList(r+2,c)));
            }
        }

        // finds moves for knights
        if (piece == 'n') {
            if (r < 7 && c < 6) {
                if (board[r + 1][c + 2].getTeam() != team) /* down 1 right 2 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r + 1, c + 2)));
                }
            }
            if (r < 6 && c < 7) {
                if (board[r + 2][c + 1].getTeam() != team) /* down 2 right 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r + 2, c + 1)));
                }
            }
            if (r < 6 && c > 0) {
                if (board[r + 2][c - 1].getTeam() != team) /* down 2 left 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r + 2, c - 1)));
                }
            }
            if (r < 7 && c > 1) {
                if (board[r + 1][c - 2].getTeam() != team) /* down 1 left 2 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r + 1, c - 2)));
                }
            }
            if (r > 0 && c > 1) {
                if (board[r - 1][c - 2].getTeam() != team) /* up 1 left 2 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r - 1, c - 2)));
                }
            }
            if (r > 1 && c > 0) {
                if (board[r - 2][c - 1].getTeam() != team) /* up 2 left 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r - 2, c - 1)));
                }
            }
            if (r > 1 && c < 7) {
                if (board[r - 2][c + 1].getTeam() != team) /* up 2 right 1 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r - 2, c + 1)));
                }
            }
            if (r > 0 && c < 6) {
                if (board[r - 1][c + 2].getTeam() != team) /* up 1 right 2 */ {
                    moves.add(new ArrayList<Integer>(Arrays.asList(r - 1, c + 2)));
                }
            }
        }

        return moves;
    }

}