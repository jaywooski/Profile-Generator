const generateCard = function(array) {
    var cardSection = "";
    
    for(let i = 0; i < array.length; i++) {
        
        cardSection += `
                
        <!-- card#${i+1} -->
        <div class="shadow-md my-12 text-white rounded-lg">
            <div class="bg-blue-700 rounded-t-lg">
                <ul class="flex-col text-center justify-around">
                    <li class="p-2 text-xl capitalize">${array[i].name}</li>
                    <li class="p-2 text-lg capitalize">${array[i].employeeType}</li>
                </ul>
            </div>
            <div>
                <ul class="flex-col text-sm text-black p-4 ">
                    <li class="border p-2">ID:  ${i + 1}</li>
                    <li class="border p-2">Email:<a href='mailto:${array[i].email}' class='px-2 text-blue-600 underline'>${array[i].email}</a></li>
                    ${generateThirdDetail(array[i])}
                </ul>
            </div>
        </div>`

    }

    return cardSection;
} 

const generateThirdDetail = function(obj) {
    const type = obj.employeeType
    switch(type) {
        case 'manager':
            return `<li class="border p-2">Office Number: ${obj.officeNumber}</li>`;
        case 'engineer':
            return `<li class="border p-2 capitalize">Github: <a href="https://www.github.com/${obj.github}" class = "text-blue-600 underline">  ${obj.github}</a></li>`;
        case 'intern':
            return `<li class="border p-2 capitalize">School:  ${obj.school}</li>`
        default:
            return `<li class="border p-2 capitalize">An ${type}</li>`
    }
}

const generatePage = function(array){
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Employees</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
     integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header class="p-16 text-3xl text-white flex justify-center bg-red-700">
        <h1>My Team</h1>
    </header>
    <div class="flex flex-col mx-24 sm:flex-row sm:mx-0 justify-around " >
        ${generateCard(array)}
    </div>

</body>
</html>`
}

module.exports = generatePage;