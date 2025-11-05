export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);   
}

export default formatCurrency; // если написан так export то надо по другому писать import| import НО БЕЗ {}