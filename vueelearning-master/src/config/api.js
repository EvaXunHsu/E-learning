import { baseUrl } from './env'
import qs from 'qs'
import axios from 'axios'

let word_url = baseUrl + '/word'
let paragraph_url = baseUrl + '/paragraph'
let question_url = baseUrl + '/question'
let exam_url = baseUrl + '/exam'
let list_url = '/list'
let insert_url = '/insert'
let delete_url = '/delete'
export const translate_url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170914T100830Z.f3d59a97d82e71e2.f10871584962d7c3d0de06f77100de917f720256&lang=zh&text='
export const word_pie_url = word_url + '/pie'
export const word_list_url = word_url + list_url
export const word_insert_url = word_url + insert_url
export const word_delete_url = word_url + delete_url
export const lessonPlan_url = baseUrl + '/file/'
export const lessonPlan_list_url = lessonPlan_url + 'files/'
export const lessonPlan_download_url = lessonPlan_url + 'getfiles'
export const lessonPlan_delete_url = lessonPlan_url + 'delete'
export const paragraph_list_url = paragraph_url + list_url
export const paragraph_insert_url = paragraph_url + insert_url
export const paragraph_delete_url = paragraph_url + delete_url
export const question_insert_url = question_url + insert_url
export const question_delete_url = question_url + delete_url
export const question_list_url = question_url + list_url
export const question_findOne_url = question_url + '/findOne'
export const question_autoGenerated_url = question_url + '/autoGenerated'
export const exam_insert_url = exam_url + insert_url
export const exam_autoGenerate_url = exam_url + '/autoGenerateExam'
export const exam_generalExam_url = exam_url + '/generalExam'
export const exam_dynamicExam_url = exam_url +'/dynamicExam'

export const question_list = data => {
    return axios.get(question_list_url,data)
}

export const question_findOne = data => {
    return axios.get(question_findOne_url,data)
}

export const login = data => {
    return axios.post(baseUrl+"/auth/login",qs.stringify(data))
};