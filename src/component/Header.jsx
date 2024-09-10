
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Header = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));


  return (
    <div className='flex justify-between border-spacing-10 p-5 bg-blue-600 text-white items-center '>
        <h1 className='font-bold'>Inventory Management System</h1>
        
        <div className='flex justify-center space-x-5 items-center '>
        <p className=''>Home</p>
        {/* <p>Search in site</p> */}
        <Search sx={{background:"white", color:"black"}}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"black"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search in site"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
    </div>
  )
}

export default Header