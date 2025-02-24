// import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Lumex Logo" className="h-8 w-auto" />
        </div>
        <ConnectButton />
      </div>
    </header>
  );
};
