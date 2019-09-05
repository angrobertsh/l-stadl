$(function(){
  // Initialize responsive nav
  $("body").on("click", "#nav-hamburger", function(){
    $("#wide-nav").toggleClass("hidden");
  })
})

// To add more sections to the nav, do the following:
// 1. Create a new html file (e.g. "boots.html")
// 2. Put it in either the "gb" or "d" folder
// 3. Add the corresponding word to the "var sections = ["a", "b", "{YOUR FILE NAME HERE}"]" line under either the language === "gb" or language === "d"
// 4. In your html file, insert the following:
// <div id="nav-container">
// 		<script>
// 			renderNav("{gb or d}", "{YOUR FILE NAME HERE}");
// 		</script>
// 	</div>

function renderNav(language, active){
  if(language === "gb"){
    var sections = ["welcome", "tradition", "fetish", "maps", "links", "contact"];
    var href = "d";
    var flagId = "de-flag";
    var navHTML = '<nav class="flex items-center justify-between flex-wrap bg-dark-blue p-2"> \
      <div id="nav-hamburger" class="block lg:hidden"> \
        <button class="flex items-center px-3 py-2 border rounded text-white border-custom-teal hover:border-white"> \
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> \
            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/> \
          </svg> \
        </button> \
      </div> \
      <div class="block lg:order-last"> \
        <div class="flex text-sm lg:px-2 py-2 leading-none text-white lg:mt-0"> \
          <div id="contact-info" class="flex flex-col mr-4"> \
            <div>Martin-Luther-Strasse 15 | D-10777 Berlin</div><div>Wed - Sat: 12.00 - 19.00 | ☎ 030-5490 6616</div> \
          </div> \
          <a href="../' + href + '/wilkommen.html" id="' + flagId + '" class="border border-white"></a> \
        </div> \
      </div> \
      <div id="wide-nav" class="w-full block flex-grow flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto hidden"> \
        <div class="text-sm flex flex-col lg:flex lg:flex-row">'

    for(var i = 0; i < sections.length; i++){
      navHTML = navHTML + '<div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0"> \
        <a href="./' + sections[i] +  '.html" id="nav-' + sections[i] + '" class="text-white">' + capitalizeFirstLetter(sections[i]) + '</a> \
      </div>'
    }

    navHTML = navHTML + '</div></div></nav>'
  }

  $("#nav-container").append(navHTML)

  $("#nav-" + active).addClass("nav-active")
}

// This is the rendered html of a noscript nav example for the welcome page

// <noscript>
//   <nav class="flex items-center justify-between flex-wrap bg-dark-blue p-2">
//     <div id="nav-hamburger" class="block lg:hidden">
//         <button class="flex items-center px-3 py-2 border rounded text-white border-custom-teal hover:border-white">
//             <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//         </button>
//     </div>
//     <div class="block lg:order-last">
//         <div class="flex text-sm lg:px-2 py-2 leading-none text-white lg:mt-0">
//           <div id="contact-info" class="flex flex-col mr-4">
//             <div>Martin-Luther-Strasse 15 | D-10777 Berlin</div>
//             <div>Wed - Sat: 12.00 - 19.00 | ☎ 030-5490 6616</div>
//           </div>
//           <a href="../d/welcome.html" id="de-flag" class="border border-white"></a>
//         </div>
//     </div>
//     <div id="wide-nav" class="w-full block flex-grow flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto hidden">
//         <div class="text-sm flex flex-col lg:flex lg:flex-row">
//           <div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0">
//               <a href="./welcome.html" class="text-white nav-active">
//                   Welcome
//               </a>
//           </div>
//           <div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0">
//               <a href="./tradition.html" class="text-white">
//                   Tradition
//               </a>
//           </div>
//           <div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0">
//               <a href="./fetish.html" class="text-white">
//                   Fetish
//               </a>
//           </div>
//           <div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0">
//               <a href="./maps.html" class="text-white">
//                   Maps
//               </a>
//           </div>
//           <div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0">
//               <a href="./links.html" class="text-white">
//                   Links
//               </a>
//           </div>
//           <div class="mt-2 lg:mx-2 lg:inline-block lg:mt-0">
//               <a href="./contact.html" class="text-white">
//                   Contact
//               </a>
//           </div>
//         </div>
//     </div>
//   </nav>
// </noscript>

// To add more sections to the footer, do the following:
// 1. Create a new html file (e.g. "gdp.html")
// 2. Put it in either the "gb" or "d" folder
// 3. Add the corresponding word to the "var sections = ["a", "b", "{YOUR FILE NAME HERE}"]" line under either the language === "gb" or language === "d"
// 4. In your html file, insert the following:
// <div id="footer-container">
//   <script>
//     renderFooter("{gb or d}");
//   </script>
// </div>

function renderFooter(language){
  if(language === "gb"){
    var sections = ["about", "privacy", "legal"];
    var footerHTML = '<footer class="flex flex-col text-sm items-center p-4 bg-dark-blue text-white"> \
      <div class="flex items-center">'

    for(var i = 0; i < sections.length; i++){
      footerHTML = footerHTML + '<a href="./' + sections[i] + '.html" class="mx-2">' + capitalizeFirstLetter(sections[i]) + '</a>'
    }

    footerHTML = footerHTML + '</div><div>© LEDERHOSEN-STADL 2019</div></footer>'
  }

  $("#footer-container").append(footerHTML);
}

// Renders the following:
// <footer class="flex flex-col text-sm items-center p-6 bg-dark-blue text-white">
//   <div class="flex items-center">
//     <a href="./about.html" class="mx-2">About</a>
//     <a href="./privacy.html" class="mx-2">Privacy</a>
//     <a href="./legal.html" class="mx-2">Legal</a>
//   </div>
//   <div>
//     © LEDERHOSEN-STADL 2019
//   </div>
// </footer>


function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}
