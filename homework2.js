//Product Data
let requestURL = 'https://fakestoreapi.com/products?limit=10'

fetch(requestURL)
    .then((res) => { return res.json()})
    .then((data) => {
        //console.log(data);
        populateList(data);
    });
    
const itemList = document.getElementById('list');

function populateList(data){
    data.map((data) => {
        stringItem = 
            `<div class="row collapse show"  id="rowItem${data.id}" >
                <div class="col-md-9">
                    <div id = 'title${data.id}'>
                        <h2><a href="https://www.google.com/search?q=${data.title.split(' ').join('+')}" id="title${data.id}"> ${data.title}</a></h2>
                    </div>
                    <div id="itemdetaildismiss${data.id}">
                        <div id="price${data.id}">$ ${data.price}</div>
                        <p id="description"${data.id}>${data.description}</p>
                        <div id="category${data.id}">${data.category}</div>
                    </div>
                    <div class="my-3">
                        <button class="btn btn-outline-secondary" id="dismiss${data.id}" onclick="dismissToggle(this.id)" >Dismiss</button>
                    </div>
                    
                </div>
                <div class="col-md-3" id="itemimagedismiss${data.id}">
                    <img id="itemimage${data.id}" src="${data.image}"atl="${data.title} image" style="width:256px;height:256px">
                    <br>
                </div>
                <br>
                <hr />    
            </div> `
        itemList.innerHTML += stringItem;
        })
};


const dismissToggle = (clickId) =>{
    const thisButton = document.getElementById(clickId)
    const itemDetail = document.getElementById('itemdetail'+clickId);
    const itemImage = document.getElementById('itemimage'+clickId);

    if (thisButton.innerText === "Dismiss") {
        thisButton.innerHTML = "Dismissed";
        thisButton.classList = "btn btn-outline-danger";
        // hide detials from veiw
        itemDetail.style.display = "none";
        itemImage.style.display = "none";
        
    }else {
        thisButton.innerHTML = "Dismiss";
        thisButton.classList = "btn btn-outline-secondary";
        // unhide detials from veiw
        itemDetail.style.display = "block";
        itemImage.style.display = "block";
    }
};

const searchInput = document.getElementById("input");

const itemSearch = () => {
    //console.log(searchInput.value);
    let index = 1;
    //view all items in the case inputfield is clear and "go" button is clicked again
    if (searchInput.value === "") {
        for (index; index < 11; index++){
            document.getElementById('rowItem'+index).classList.add('show');
        }
    //just view the row of the title that includes search input, if you input another title component then it will narrow search
    } else {
        for (index; index < 11; index++) {
            if (document.getElementById('title'+index).innerHTML.includes(searchInput.value)) {
                console.log(document.getElementById('rowItem'+index));

            }else{
                console.log(document.getElementById(index));
                document.getElementById('rowItem'+index).classList.remove('show');
            }
        }
    }
};
