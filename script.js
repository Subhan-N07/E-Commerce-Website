console.log("hello")

const wrapper = document.querySelector(".sliderwrapper")
console.log(wrapper)

//wrapper.style.transform = "translateX(-300vw)"

const menu = document.querySelectorAll(".menu")

menu.forEach((item,index) => {
    item.addEventListener("click",() => {
        
      wrapper.style.transform = `translateX(${-100 * index}vw)`
      console.log("clicked")
    }
    )
  
}
)

const sz = document.querySelectorAll(".size")

sz.forEach((size,index)=>{
  size.addEventListener("click",() => {
    sz.forEach((size) => {
      size.style.backgroundColor = "white"
    size.style.color = "black"    
    }
    )
    size.style.backgroundColor = "black"
    size.style.color = "white"
  }
  )
})

const nm = document.querySelector(".productbuy")
const pay = document.querySelector(".payment")
const cl = document.querySelector(".close")

nm.addEventListener("click",() => {
  pay.style.display = "flex"
}
)

cl.addEventListener("click",() => {
  pay.style.display = "none"
}
)