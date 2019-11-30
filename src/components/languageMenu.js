import React, { useState } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import frLogo from "../images/fr.png"
import enLogo from "../images/gbr.png"

const useStyles = makeStyles({
    selectFocus: {
        "&:focus": {
            background: 'transparent'
        }
    }
})

const LanguageMenu = (props) => {
    const { t, i18n } = useTranslation()
    const classes = useStyles()
    
    const [values, setValues] = useState({
        language: 'en'
    });

    function handleChange(event) {
        i18n.changeLanguage(event.target.value)

        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <Select
            value={values.language}
            onChange={(e) => handleChange(e)}
            disableUnderline
            inputProps={{
                name: 'language'
            }}
            >
            <MenuItem value={'en'}><img src={enLogo} alt="EN" /></MenuItem>
            <MenuItem value={'fr'}><img src={frLogo} alt="FR"/></MenuItem>
            </Select>
    )
}

export default LanguageMenu