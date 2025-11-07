import React, { createContext, useState, ReactNode, useContext } from 'react';


interface ModalContextType {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModalContext = createContext<ModalContextType | undefined>(undefined);


interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalShow, setModalShow }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
};
