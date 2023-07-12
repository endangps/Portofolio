function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    // $(target).html("Less Info")
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle().addClass("active")
    console.log($(item).children(".about-exp-item-detail"))
    
}