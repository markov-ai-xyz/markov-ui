import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiPypi } from "react-icons/si";
import MarkovSvg from './icons/MarkovSvg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      {new Date().getFullYear()}
      &nbsp;
      Markov AI
    </Typography>
  );
}

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const [email, setEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setEmail(inputValue);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleSubscribe = () => {
      if (isValidEmail) { setEmail(''); }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-10px' }}>
              <MarkovSvg className="markov-logo" width={100} height={100} />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                }}
                value={email}
                error={!isValidEmail}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubscribe}
                disabled={!isValidEmail}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" onClick={() => scrollToSection('features')} sx={{ cursor: 'pointer' }}>
            Features
          </Link>
          <Link color="text.secondary" onClick={() => scrollToSection('integration')} sx={{ cursor: 'pointer' }}>
            Integration
          </Link>
          <Link color="text.secondary" onClick={() => scrollToSection('pricing')} sx={{ cursor: 'pointer' }}>
            Pricing
          </Link>
          <Link color="text.secondary" onClick={() => scrollToSection('examples')} sx={{ cursor: 'pointer' }}>
            Examples
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="/terms-of-service">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/markovai/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <SiLinkedin />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.github.com/markov-ai-xyz/"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <SiGithub />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.pypi.org/project/markov-ai/"
            aria-label="PyPI"
            sx={{ alignSelf: 'center' }}
          >
            <SiPypi />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.npmjs.com/package/markov-ai/"
            aria-label="NPM"
            sx={{ alignSelf: 'center' }}
          >
            <SiNpm />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
