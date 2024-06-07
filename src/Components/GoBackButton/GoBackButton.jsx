import { ListItem, ListItemButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Link as RouterLink } from 'react-router-dom';


function GoBackButton() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ListItem
            sx={{
                width: 'fit-content'
            }}
        >
            <ListItemButton
                LinkComponent={RouterLink}
                to='/home'
                sx={{
                    padding: '0',
                    paddingRight: '0.5rem'
                }}
            >
                <ArrowBackIosNewRoundedIcon
                    sx={{
                        fontSize: isMobile ? '1rem' : '1.5rem',
                    }} />
            </ListItemButton>
            <Typography
                sx={{
                    fontSize: isMobile ? '1rem' : '1.5rem',
                }}
            >
                Agendar consulta
            </Typography>
        </ListItem>
    )
}

export default GoBackButton