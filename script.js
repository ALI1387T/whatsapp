const addBtn = document.querySelector("#addbtn")
const Name = document.querySelector("#name")
const photo = document.querySelector("#photo")
const last = document.querySelector("#Message")
const count = document.querySelector("#count")
const sent = document.querySelector("#sent")
const list = document.querySelector(".ul")
const timed = document.querySelector("#timed")



addBtn.addEventListener("click", () => {
    document.querySelector(".chatList").hidden = true
    document.querySelector(".add").hidden = false
})
sent.addEventListener("click", () => {
    let li = document.createElement("li")
    li.className = "group"
    let img = (document.createElement("img"))
    img.src = photo.file
    console.log(img.value)
    console.log(img.files)
    console.log(img.size)
    console.log(img)
    img.id = "groupIcon"
    li.appendChild(img)
    let h4 = document.createElement("h4")
    h4.id = "groupName"
    h4.innerHTML = Name.value
    li.appendChild(h4)
    let p1 = document.createElement("p")
    p1.id = "time"
    p1.innerHTML = timed.value
    li.appendChild(p1)
    let h5 = document.createElement("h5")
    h5.id = "lastMessage"
    h5.innerHTML = last.value
    li.appendChild(h5)
    let p2 = document.createElement("p")
    p2.id = "numberOfMessages"
    p2.innerHTML = count.value
    li.appendChild(p2)
    list.appendChild(li)
    document.querySelector(".chatList").hidden = false
    document.querySelector(".add").hidden = true
})