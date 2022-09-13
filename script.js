async function RegularData() {
    try {
        document.getElementById("test").style.display = "none"

        await fetch('https://api.openbrewerydb.org/breweries?per_page=1000')
        .then(res=>(res.json()))
        .then(data=>data.map(e => {
            document.getElementById("regular").innerHTML+=
            `
            <div class="card">
            <p>${e.name}</p>
             </div>
            
            `
            
            
        }))
        
    } catch (error) {
        console.log(error.message)
    }
    

    
}

async function SearchedData() {
    try {

        const input = document.getElementById("input").value;
        console.log(`${input}`)

        await fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${input}`)
        .then(res=>(res.json()))
        .then(data=>data.map(e => {
            document.getElementById("searchedheading").style.display = "none"
            
            document.getElementById("searched").innerHTML+=
            `
            <div class="card">
            <p>${e.name}</p>
             </div>
            
            `
            
        }))
        
    } catch (error) {
        console.log(error.message)
    }
    

    
}


async function RandomData() {
    try {

        
        await fetch(`https://api.openbrewerydb.org/breweries/random`)
        .then(res=>(res.json()))
        .then(data=>data.map(e => {

            document.getElementById("randomheading").style.display = "none";
            
            
            document.getElementById("random").innerHTML+=
            `
            <div class="card">
            <p>${e.name}</p>
             </div>
            
            `
            
        }))
        
    } catch (error) {
        console.log(error.message)
    }
    

    
}





var formData = new FormData(document.querySelector('#formdata'))
console.log(formData)