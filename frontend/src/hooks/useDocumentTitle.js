import { useEffect } from "react";
import {APP_NAME} from '../config/config';

const useDocumentTitle = (title) => {
       document.title =`${title || ""} - ${APP_NAME}`;
};
export {useDocumentTitle};