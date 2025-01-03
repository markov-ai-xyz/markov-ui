import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };

  const handleStartNow = () => {
    if (emailRegex.test(email)) { 
      setEmail(''); 
      window.open('https://cal.com/anant-chandra/quick-chat', '_blank');
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Prepare your data
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                marginRight: { md: '16px' },
              }}
            >
              for LLMs
            </Typography>
          </Box>
          <br/>
          <Typography
            textAlign="center"
            color="text.primary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            <span style={{ fontSize: '1.25em', fontStyle: 'italic' }}>
              Transform all your data into multi-modal knowledge graphs.
              <br/>
              Ground LLMs to get stellar answers & supercharge your business.
            </span>
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
        >
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            variant="outlined"
            aria-label="Enter your email address"
            placeholder="Your email address"
            inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
            }}
            value={email}
            error={email.length > 0 && !emailRegex.test(email)}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartNow}
            disabled={!emailRegex.test(email)}
          >
              Start now
          </Button>
        </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="/terms-and-conditions" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <br/>
        <br/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            mt: 4,
          }}
        >
          <Box
            sx={(theme) => ({
              height: { xs: 400, sm: 400, md: 500 },
              width: { xs: 400, sm: 400, md: 500 },
              backgroundImage: 'url("/static/images/templates/templates-images/pipeline.webp")',
              backgroundSize: 'cover',
              borderRadius: '10px',
              outline: '1px solid',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.5)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            })}
          />
          <Box
            sx={(theme) => ({
              height: { xs: 400, sm: 400, md: 500 },
              width: { xs: 400, sm: 400, md: 500 },
              backgroundImage: 'url("/static/images/templates/templates-images/retrieval.png")',
              backgroundSize: 'cover',
              borderRadius: '10px',
              outline: '1px solid',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.5)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            })}
          />
        </Box>
      </Container>
    </Box>
  );
}
