const installGenplan = () => {
    const address = document.querySelector('#address')
    const floor = document.querySelector('#floor')
    const flat = document.querySelector('#flat')
    const builds = document.querySelectorAll('.build-path')


    builds.forEach(build => {
        build.addEventListener('mouseover', () => {
            const buildAddress = build.getAttribute('data-address')
            const buildFloor = build.getAttribute('data-floor-quantity')
            const buildFlat = build.getAttribute('data-flat-quantity')

            address.innerHTML = buildAddress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })

    const addBooking =(builds)=> builds.forEach(build =>{
      const buildLink = build.closest('a')
      const flatQuantity = build.getAttribute('data-flat-quantity')
      const flatQuantityToNumber = parseInt(flatQuantity)
     flatQuantityToNumber ? flatQuantityToNumber >= 0 : buildLink.classList.add('booking')
 
     buildLink.addEventListener('click', (event)=> {
       if (buildLink.classList.contains('booking')) {
         event.preventDefault()
       }
     })
 
   })
   addBooking(builds)
}

document.querySelector('.genplan') ? installGenplan() : null

const headerNav = document.querySelector('.header-nav')
const hamburger = document.querySelector('.hamburger')



const installBuild = () => {
    const buildpath1 = document.querySelectorAll('.buildpath1')    
    const addressbuild = document.querySelector('#addressbuild')
    const soldbuild = document.querySelector('#soldbuild')
    const flatsbuild = document.querySelector('#flatsbuild')
    const reservationbuild = document.querySelector('#reservationbuild')
    const freebuild = document.querySelector('#freebuild')
    const floorbuild = document.querySelector('#floorbuild')
    const actionbuild = document.querySelector('#actionbuild')
    const floorsbuild = document.querySelector('#floorsbuild')
    
    console.log(addressbuild,soldbuild,flatsbuild,reservationbuild,freebuild,floorbuild,actionbuild,floorsbuild,buildpath1)
    buildpath1.forEach(buildpath1 => {
        buildpath1.addEventListener('mouseover', () => {
            const buildpath1Adress = buildpath1.getAttribute('data-addressbuild')
            const buildpath1Sold = buildpath1.getAttribute('data-soldbuild')
            const buildpath1Flats = buildpath1.getAttribute('data-flatsbuild')
            const buildpath1Reservation = buildpath1.getAttribute('data-reservationbuild')
            const buildpath1Free = buildpath1.getAttribute('data-freebuild')
            const buildpath1Floor = buildpath1.getAttribute('data-floorbuild')
            const buildpath1Fction = buildpath1.getAttribute('data-actionbuild')
            const buildpath1Floors = buildpath1.getAttribute('data-floorsbuild')

            addressbuild.innerHTML = buildpath1Adress
            soldbuild.innerHTML = buildpath1Sold
            flatsbuild.innerHTML = buildpath1Flats
            reservationbuild.innerHTML = buildpath1Reservation
            freebuild.innerHTML = buildpath1Free
            floorbuild.innerHTML = buildpath1Floor
            actionbuild.innerHTML = buildpath1Fction
            floorsbuild.innerHTML = buildpath1Floors
        })
    })
}

document.querySelector('.genplan') ? installBuild() : null

hamburger.addEventListener('click', () => {
    console.log(hamburger);
    headerNav.classList.toggle('show')
})

const arrayBurgers = document.querySelectorAll('.hamburger')
  
  if (arrayBurgers.length > 0) {
      arrayBurgers.forEach(item => {
        item.addEventListener('click', function(){
          item.classList.toggle('is-active');
      })
    })
  }