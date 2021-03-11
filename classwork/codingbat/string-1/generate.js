var fs = require("fs");
var sources = [
    "public String helloName(String name) {\n  return \"Hello \" + name + \"!\";\n}\n",
    "public String makeAbba(String a, String b) {\n  return a + b + b + a;\n}\n",
    "public String makeTags(String tag, String word) {\n  return \"&lt;\" + tag + \"&gt;\" + word + \"&lt;/\" + tag + \"&gt;\";\n}\n",
    "public String makeOutWord(String out, String word) {\n  return out.substring(0,2) + word + out.substring(2);\n}\n",
    "public String extraEnd(String str) {\n  String temp = str.substring(str.length() - 2);\n  return temp + temp + temp;\n}\n",
    "public String firstTwo(String str) {\n  if (str.length() == 0) {\n    return \"\";\n  } else if (str.length() == 1) {\n    return str;\n  } else {\n    return str.substring(0, 2);\n  }\n}\n",
    "public String firstHalf(String str) {\n  return str.substring(0, str.length()/2);\n}\n",
    "public String withoutEnd(String str) {\n  return str.substring(1, str.length()-1);\n  \n}\n",
    "public String comboString(String a, String b) {\n  if (a.length() &gt; b.length()) {\n    return b + a + b;\n  } else {\n    return a + b + a;\n  }\n}\n",
    "public String nonStart(String a, String b) {\n  String concat1 = a.substring(1);\n  String concat2 = b.substring(1);\n  \n  return concat1 + concat2;\n}\n",
    "public String left2(String str) {\n  String start = str.substring(0, 2);\n  String end = str.substring(2);\n  \n  return end + start;\n}\n",
    "public String right2(String str) {\n  String end = str.substring(str.length() - 2);\n  String start = str.substring(0, str.length() - 2);\n  \n  return end + start;\n}\n"
];

sources.forEach(source => {
    var title = /public String (\w+)/.exec(source)[1];

    var htmlSource = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>String-1 > ${title} | Dinneen Coding Time</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">


    <script src="/assets/script.js" defer></script>
    <script src="/assets/classwork.js" defer></script>

<link rel="stylesheet" href="/assets/highlight.css">


    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300&family=Fira+Code&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="/style.css">
</head>

<body class="headerpadding">
    <header>
        <a href="/"><img src="/logo.svg" width="36" height="36" alt="DCT logo, a very stylized D"></a>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="hero--splash--downcover"
        preserveAspectRatio="none">
        <defs>
            <linearGradient id="g1" x1="1" x2="0">
                <stop stop-color="#57efec" />
                <stop offset=".5" stop-color="#e85e90" />
                <stop offset="1" stop-color="#fcc9ba" />
            </linearGradient>
        </defs>
        <rect class="" width="1440" height="36"></rect>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="hero--splash down" preserveAspectRatio="none">
        <defs>
            <linearGradient id="g1" x1="1" x2="0">
                <stop stop-color="#57efec" />
                <stop offset=".5" stop-color="#e85e90" />
                <stop offset="1" stop-color="#fcc9ba" />
            </linearGradient>
        </defs>
        <path class="stroked"
            d="M0,64L16,90.7C32,117,64,171,96,170.7C128,171,160,117,192,101.3C224,85,256,107,288,101.3C320,96,352,64,384,74.7C416,85,448,139,480,149.3C512,160,544,128,576,117.3C608,107,640,117,672,122.7C704,128,736,128,768,112C800,96,832,64,864,64C896,64,928,96,960,138.7C992,181,1024,235,1056,250.7C1088,267,1120,245,1152,224C1184,203,1216,181,1248,170.7C1280,160,1312,160,1344,160C1376,160,1408,160,1424,160L1440,160L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z">
        </path>
        <path class="filled"
            d="M0,64L16,90.7C32,117,64,171,96,170.7C128,171,160,117,192,101.3C224,85,256,107,288,101.3C320,96,352,64,384,74.7C416,85,448,139,480,149.3C512,160,544,128,576,117.3C608,107,640,117,672,122.7C704,128,736,128,768,112C800,96,832,64,864,64C896,64,928,96,960,138.7C992,181,1024,235,1056,250.7C1088,267,1120,245,1152,224C1184,203,1216,181,1248,170.7C1280,160,1312,160,1344,160C1376,160,1408,160,1424,160L1440,160L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z">
        </path>
    </svg>
    <main>
<h1>String-1 > ${title}</h1>

        <code id="source" data-entry-point="CLASS_BODY_MEMBER_DECLARATION">
            ${source}  
        </code>
    </main>
    <footer>
        <h3>Dinneen Coding Time</h3>
        <div class="footer--links">
            <div class="footer--link-category">
                <h4>Content</h4>
                <ul>
                    <li>
                        <a href="/codehs">CodeHS</a>
                    </li>
                    <li>
                        <a href="/classwork">Classwork</a>
                    </li>
                    <li>
                        <a href="/worksheets">Worksheets</a>
                    </li>
                </ul>
            </div>
            <div class="footer--link-category">
                <h4>Site</h4>
                <ul>
                    <li>
                        <a href="/">Homepage</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/cite">Citing</a>
                    </li>
                    <li>
                        <a href="/sitemap">Sitemap</a>
                    </li>
                </ul>
            </div>
            <div class="footer--link-category">
                <h4>Legal</h4>
                <ul>
                    <li>
                        <a href="/legal/terms">Terms & Conditions</a>
                    </li>
<li>
                        <a href="/legal/foss-usage">OSS Licenses</a>
                    </li>
                    <li>
                        <a href="/legal/license">License</a>
                    </li>
                    <li>
                        <a href="/legal/fairuse">Fair Use Statement</a>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="footer--socials">
            <li>
                <a href="https://github.com/coleh2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span class="visually-hidden">GitHub</span>
                </a>
            </li>
            <li>
                <a href="https://discord.gg/tUEmq4TcYj">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                        clip-rule="evenodd" viewBox="0 0 24 24">
                        <path
                            d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                    </svg>
                    <span class="visually-hidden">Discord</span>
                </a>
            </li>
            <li>
                <a href="mailto:projects@coleh.net">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                    </svg>
                    <span class="visually-hidden">Email</span>
                </a>
            </li>
        </ul>
    </footer>
</body>

</html>`;

fs.writeFileSync(__dirname + "/" + title + ".html", htmlSource);

});