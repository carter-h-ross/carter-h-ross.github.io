module dev.carterross.chessapp {
    requires javafx.controls;
    requires javafx.fxml;


    opens dev.carterross.chessapp to javafx.fxml;
    exports dev.carterross.chessapp;
}