export function text(identifier: string): string{
    if (Texts === undefined){
        return DefaultErrorMessage
    }

    const langs = Texts[identifier]
    if (langs === undefined || langs[languageSet] === undefined) {
        return DefaultErrorMessage
    }
    return langs[languageSet]
}

export function useLanguage(lang?: LanguageType){
    languageSet = lang ?? DefaultLanguageType
}

export function useFile(path: string){
    const file = require('../texts.json')
    //const file = require(path);
    Texts = file as TextMap
}



type LanguageType = 'PT' | 'EN'
type TranslatedTexts = { [key in LanguageType]: string }
export type TextMap = { [key: string]: TranslatedTexts }


const DefaultLanguageType: LanguageType = 'PT'
const DefaultErrorMessage: string = 'This text does not exist in this language.'
var languageSet: LanguageType = DefaultLanguageType
var Texts: TextMap