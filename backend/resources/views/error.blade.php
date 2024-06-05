<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">

    <title>Something went wrong</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
        html {
            display: grid;
            min-height: 100%;
        }
        body {
            display: grid;
            overflow: hidden;
            font-family: 'Lato', sans-serif;
            text-transform: uppercase;
            text-align: center;
            margin: 0;
        }
        #container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        h1 {
            font-size: 0.9em;
            font-weight: 100;
            letter-spacing: 3px;
            padding-top: 5px;
            color: #fcfcfc;
            padding-bottom: 5px;
            text-transform: uppercase;
        }
        .green {
            color: #4ec07d;
        }
        .red {
            color: #e96075;
        }
        .alert {
            font-weight: 700;
            letter-spacing: 5px;
        }
        p {
            margin-top: -5px;
            font-size: 0.5em;
            font-weight: 100;
            color: #5e5e5e;
            letter-spacing: 1px;
        }
        button, .dot {
            cursor: pointer;
        }
        #success-box {
            position: relative;
            width: 35%;
            height: 250px;
            background: linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%);
            border-radius: 20px;
            box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
            perspective: 40px;
        }
        #error-box {
            position: relative;
            width: 35%;
            height: 250px;
            background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
            border-radius: 20px;
            box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
        }
        .dot {
            width: 8px;
            height: 8px;
            background: #fcfcfc;
            border-radius: 50%;
            position: absolute;
            top: 4%;
            right: 6%;
        }
        .dot:hover {
            background: #c9c9c9;
        }
        .two {
            right: 12%;
            opacity: 0.5;
        }
        .face {
            position: absolute;
            width: 22%;
            height: 22%;
            background: #fcfcfc;
            border-radius: 50%;
            border: 1px solid #777;
            top: 21%;
            left: 37.5%;
            z-index: 2;
            animation: bounce 1s ease-in infinite;
        }
        .face2 {
            position: absolute;
            width: 22%;
            height: 22%;
            background: #fcfcfc;
            border-radius: 50%;
            border: 1px solid #777;
            top: 21%;
            left: 37.5%;
            z-index: 2;
            animation: roll 3s ease-in-out infinite;
        }
        .eye {
            position: absolute;
            width: 5px;
            height: 5px;
            background: #777;
            border-radius: 50%;
            top: 40%;
            left: 20%;
        }
        .right {
            left: 68%;
        }
        .mouth {
            position: absolute;
            top: 43%;
            left: 41%;
            width: 7px;
            height: 7px;
            border-radius: 50%;
        }
        .happy {
            border: 2px solid;
            border-color: transparent #777 #777 transparent;
            transform: rotate(45deg);
        }
        .sad {
            top: 49%;
            border: 2px solid;
            border-color: #777 transparent transparent #777;
            transform: rotate(45deg);
        }
        .shadow {
            position: absolute;
            width: 21%;
            height: 3%;
            opacity: 0.5;
            background: #777;
            left: 40%;
            top: 43%;
            border-radius: 50%;
            z-index: 1;
        }
        .scale {
            animation: scale 1s ease-in infinite;
        }
        .move {
            animation: move 3s ease-in-out infinite;
        }
        .message {
            position: absolute;
            width: 100%;
            text-align: center;
            height: 40%;
            top: 47%;
        }
        .button-box {
            position: absolute;
            background: #fcfcfc;
            width: 50%;
            height: 15%;
            border-radius: 20px;
            top: 73%;
            left: 25%;
            outline: 0;
            border: none;
            box-shadow: 2px 2px 10px rgba(119, 119, 119, .5);
            transition: all 0.5s ease-in-out;
        }
        .button-box:hover {
            background: #efefef;
            transform: scale(1.05);
            transition: all 0.3s ease-in-out;
        }
        @keyframes bounce {
            50% {
                transform: translateY(-10px);
            }
        }
        @keyframes scale {
            50% {
                transform: scale(0.9);
            }
        }
        @keyframes roll {
            0% {
                transform: rotate(0deg);
                left: 25%;
            }
            50% {
                left: 60%;
                transform: rotate(168deg);
            }
            100% {
                transform: rotate(0deg);
                left: 25%;
            }
        }
        @keyframes move {
            0% {
                left: 25%;
            }
            50% {
                left: 60%;
            }
            100% {
                left: 25%;
            }
        }
        footer {
            position: absolute;
            bottom: 0;
            right: 0;
            text-align: center;
            font-size: 1em;
            text-transform: uppercase;
            padding: 10px;
            font-family: 'Lato', sans-serif;
        }
        footer p {
            color: #ef8d9c;
            letter-spacing: 2px;
        }
        footer a {
            color: #b0db7d;
            text-decoration: none;
        }
        footer a:hover {
            color: #ffc39e;
        }
    </style>
</head>

<body>
<div id="container">
  <div id="error-box">
    <div class="dot"></div>
    <div class="dot two"></div>
    <div class="face2">
      <div class="eye"></div>
      <div class="eye right"></div>
      <div class="mouth sad"></div>
    </div>
    <div class="shadow move"></div>
    <div class="message"><h1 class="alert">Error!</h1><p>oh no, something went wrong.</p></div>
    <button class="button-box"><a href="{{ route('admin.dashboard') }}" style="text-decoration:none"><h1 class="red">try again</h1></a></button>
  </div>
</div>

<footer>
  <p>made by <a href="https://codepen.io/juliepark"> julie</a> ♡
</footer>
</body>

</html>
