<?php
if (isset ($name))
{
    $name = substr($name,0,20); //Не может быть более 20 символов
    if (empty($name))
    {
        echo "<center><b>Не указано имя !!!<p>";
        echo "<a href=index.html>Вернуться и правильно заполнить форму.</a>";
        exit;
    }
}
else
{
    $name = "не указано";
}
if (isset ($email))
{
    $email = substr($email,0,20); //Не может быть более 20 символов
    if (empty($email))
    {
        echo "<center><b>Не указан e-mail !!!<p>";
        echo "<a href=index.php>Вернуться и правильно заполнить форму.</a>";
        exit;
    }
}
else
{
    $email = "не указано";
}
if (isset ($mess))
{
    $mess = substr($mess,0,1000); //Не может быть более 1000 символов
    if (empty($mess))
    {
        echo "<center><b>Сообщение не написано !!!<p>";
        echo "<a href=index.html>Вернуться и правильно заполнить форму.</a>";
        exit;
    }
}
else
{
    $mess = "не указано";
}
$i = "не указано";

$to = "drapatiy92@gmail.com";  /*МЕНЯЕШЬ НА СВОЙ АДРЕСС!*/
$subject = "Сообщение с вашего интернет-сайта";
$message = "Имя пославшего:$name::::::::::Электронный адрес:$email::::::::::Сообщение:$mess:::::::::IP-адрес:$REMOTE_ADDR";
mail ($to,$subject,$message) or print "Не могу отправить письмо !!!";
echo "<center><b>Спасибо за отправку вашего сообщения<a href=index.php>Нажмите</a>, что бы вернуться на главную...>";
exit;
?>