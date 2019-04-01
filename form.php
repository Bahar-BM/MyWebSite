<?php
if (isset($_POST['submit'])){
    $username=$_POST['username'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    
    $myEmail="bahareh.bafandeh@gmail.com";
    $subject="From: My Website by ".$email;
    $txt="This is an email from ".$name.".\n\n".$message;
    
    mail($myEmail,$subject,$txt);
    header("Location: index.php?mailsend");
}
?>