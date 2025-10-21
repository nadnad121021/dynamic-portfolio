import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultPortfolio }  from '../portfolio';
import  type { TPortfolioInfo } from '../interfaces/portfolioInfo.interface';


type PortfolioContextType = {
  portfolio: TPortfolioInfo | null
  loading: boolean;
  error: string | null;
};

const PortfolioContext = createContext<PortfolioContextType>({
  portfolio: null,
  loading: true,
  error: null,
});

export const usePortfolio = () => useContext(PortfolioContext);


export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<TPortfolioInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPortfolio(defaultPortfolio);
    setLoading(false);
    setError(null);
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};
