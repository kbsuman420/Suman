<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action= "login.php" method="post">
        <h2>Email</h2>
        <br>
        <input type="text" name="email">
        <br>
        <h2>Password</h2>
        <br>
        <input type="text" name="password">
        <br>
        <button type="submit" name="submit">Log in</button>
    </form>

    <?php

    $conn = mysqli_connect("localhost", "root", "", "dbsuman");
    if(isset($_POST['submit'])){

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "select email,password from signup where email = '$email' and password = '$password'";
    $sqlres = mysqli_query($conn, $sql);
    $rowcount = mysqli_num_rows($sqlres);

    if($rowcount == 0){
        echo "you have does not account go to register";
    }else{
        echo "you have sccessfully log in";
    }

}
    ?>
</body>
</html>