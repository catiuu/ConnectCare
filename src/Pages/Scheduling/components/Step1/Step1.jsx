import { Box, Chip, Typography } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
function Step1() {
    return (
        <Box
            sx={{

            }}
        >
            <Typography
                sx={{
                    color: '#048ABF',
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBotton: '2.5rem'


                }}>Quem será consultado</Typography>
            <Chip
                variant='outlined'
                icon={<AccountCircleRoundedIcon
                    color='#012E40'
                />}
                label="Para mim"
                sx={{
                    borderColor: '#048ABF',
                    color: '#012E40'
                }}
            />
            <Chip
                variant='outlined'
                icon={<GroupRoundedIcon color='#012E40' />}
                label="Dependente"
                sx={{
                    borderColor: '#048ABF',
                    color: '#012E40'
                }}
            />
        </Box>
    )
}

export default Step1