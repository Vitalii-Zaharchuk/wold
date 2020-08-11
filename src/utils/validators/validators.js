import React from 'react'
export const required = value =>{
    if(value) return undefined;
    return 'Field is require'
}
export const maxLengthCreator = (maxLength) =>(value) =>{
    if(value.length > maxLength) return `Max length ${maxLength} symbole`;
    return undefined

}