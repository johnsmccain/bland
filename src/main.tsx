import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import './index.css'
import App from './App.tsx'
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter } from 'react-router-dom'
import { config } from './utils/wagmi.ts';
// import bg from "./assets/ng.jpeg"
import { TooltipProvider } from './components/ui/tooltip.tsx';
import { Toaster as Sonner } from './components/ui/sonner.tsx';
import { Toaster } from './components/ui/toaster.tsx';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TooltipProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
