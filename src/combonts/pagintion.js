export function paginition(length , list, currentPage){
    const tourPage = 6;
    const page = Math.ceil(length / tourPage);
    const startIndex = (currentPage - 1) * tourPage;
    const finshIndex = currentPage * tourPage;
    const tours = list.slice(startIndex, finshIndex);
    return{
        page,
        tours
    }
}
export function sortedTour(toursList , sortItem){
    const sortedTourList =
    sortItem === "low" ? toursList.sort((a, b) => a.priceFrom - b.priceFrom) 
    : sortItem === "high" ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
    : toursList.sort((a, b) => a.rating - b.rating);
    return{
        sortedTourList
    }
}