import FS, { fstat } from 'fs-extra'
import comparingWords from '../data/comparingWords'
import knownWordsMap from '../data/knownWordsMap'
import PATH from 'path'

const outputNewWordsFile = PATH.resolve( __dirname, '../output/newWords.txt' )

export default function() {
  // let newWordsMap = {}
  // let newWords = []
  let newWordsStr = ''
  for ( let word of comparingWords ) {
    word = word.trim()
    if ( knownWordsMap[ word ] === undefined ) {
      // newWordsMap[ word ] = 0
      // newWords.push( word )
      newWordsStr = `${newWordsStr}${word}\n`
    }
  }
  FS.outputFileSync( outputNewWordsFile, newWordsStr, { encoding: 'utf8' }  ) 
}
