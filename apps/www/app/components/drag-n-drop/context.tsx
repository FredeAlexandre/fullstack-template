import type React from "react";
import { createContext, useState } from "react";
import type { DraggableFunctionProps } from "./draggable-function";
import type {
  ContractDraggableType,
  FunctionDraggableType,
} from "./no-code-example";
interface MyContextProviderProps {
  children: React.ReactNode;
}

type ContextType = {
  contracts: ContractDraggableType[];
  functions: FunctionDraggableType[];
  addContract: (contract: ContractDraggableType) => void;
  addFunction: (functionAdd: FunctionDraggableType) => void;
  addFunctionToContract: (
    contractId: string,
    func: FunctionDraggableType,
  ) => void;
  delFunctionContract: (contractId: string, funcId: string) => void;
  changeFunctionName: (functionId: string, newName: string) => void;
  changeFunctionView: (functionId: string, _viewInside: boolean) => void;
  getFunctionName: (funcionId: string) => string;
  getFunctionView: (funcionId: string) => boolean;
  updatePosition: (
    functionId: string,
    positionX: number,
    positionY: number,
  ) => void;
};

const defaultContext: ContextType = {
  contracts: [],
  functions: [],
  addContract: () => {},
  addFunction: () => {},
  addFunctionToContract: () => {},
  delFunctionContract: () => {},
  changeFunctionName: () => {},
  changeFunctionView: () => {},
  getFunctionName: () => "function",
  getFunctionView: () => true,
  updatePosition: () => {},
};

// Création du contexte
export const MyContext = createContext<ContextType>(defaultContext);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [contracts, setContracts] = useState<ContractDraggableType[]>([]);
  const [functions, setFunctions] = useState<FunctionDraggableType[]>([]);

  // Ajouter un nouveau contrat
  const addContract = (contract: ContractDraggableType) => {
    setContracts((prevContracts) => [...prevContracts, contract]);
  };

  const addFunction = (functionAdd: FunctionDraggableType) =>
    setFunctions((prevFunctions) => [...prevFunctions, functionAdd]);

  // Ajouter une fonction à un contrat spécifique
  const addFunctionToContract = (
    contractId: string,
    func: FunctionDraggableType,
  ) => {
    setContracts((prevContracts) =>
      prevContracts.map((contract) => {
        // If contract ID matches, add the new function to the functions array
        if (contract.props.id === contractId) {
          const newFunc: DraggableFunctionProps = {
            id: func.props.id,
            name: func.props.name,
            content: func.props.content,
            position: func.props.position,
            variables: func.props.variables,
            viewInside: func.props.viewInside,
          };
          const newArray = [...contract.props.functions, newFunc];
          const newContract: ContractDraggableType = {
            content: "contract",
            props: {
              id: contractId, // Use a unique ID for each contract (e.g., timestamp-based)
              name: contract.props.name,
              content: contract.props.content,
              position: contract.props.position,
              functions: newArray, // Start with an empty array of functions, which can later be populated
              variables: newArray,
            },
          };
          return newContract;
        }
        // Return unchanged contract if IDs don't match
        return contract;
      }),
    );
    setFunctions(
      (prevFunctions) =>
        prevFunctions.filter((funcMap) => funcMap.props.id !== func.props.id), // Exclure la fonction dont l'ID correspond
    );
  };

  const delFunctionContract = (contractId: string, funcId: string) => {
    setContracts((prevContracts) =>
      prevContracts.map((contract) => {
        // If contract ID matches, add the new function to the functions array
        if (contract.props.id === contractId) {
          const funcToRemove = contract.props.functions.find(
            (funcContract) => funcContract.id === funcId,
          );
          if (funcToRemove) {
            const newFunction: FunctionDraggableType = {
              content: "function",
              props: {
                id: funcToRemove.id,
                name: funcToRemove.name,
                position: funcToRemove.position,
                content: funcToRemove.content,
                variables: funcToRemove.variables,
                viewInside: funcToRemove.viewInside,
              },
            };
            addFunction(newFunction);
          }
          const updatedFunctions = contract.props.functions.filter(
            (funcContract) => funcContract.id !== funcId,
          );
          const newContract: ContractDraggableType = {
            content: "contract",
            props: {
              id: contractId, // Use a unique ID for each contract (e.g., timestamp-based)
              name: contract.props.name,
              content: contract.props.content,
              position: contract.props.position,
              functions: updatedFunctions, // Start with an empty array of functions, which can later be populated
              variables: contract.props.variables,
            },
          };
          return newContract;
        }
        // Return unchanged contract if IDs don't match
        return contract;
      }),
    );
  };

  const changeFunctionName = (functionId: string, newName: string) => {
    setContracts((prevContracts) =>
      prevContracts.map((contract) => {
        // Map through each function to find the one that matches `functionId`
        const updatedFunctions = contract.props.functions.map((func) => {
          if (func.id === functionId) {
            // If the function matches the ID, update the name
            return { ...func, name: newName };
          }
          return func;
        });

        // Return the updated contract with the modified functions
        return {
          ...contract,
          props: {
            ...contract.props,
            functions: updatedFunctions,
          },
        };
      }),
    );
    setFunctions((prevFunctions) =>
      prevFunctions.map((func) => {
        // Map through each function to find the one that matches `functionId`
        if (func.props.id === functionId) {
          // If the function matches the ID, update the name
          return {
            ...func,
            props: {
              ...func.props,
              name: newName,
            },
          };
        }
        return func;
      }),
    );
  };

  const changeFunctionView = (functionId: string, _viewInside: boolean) => {
    setContracts((prevContracts) =>
      prevContracts.map((contract) => {
        // Map through each function to find the one that matches `functionId`
        const updatedFunctions = contract.props.functions.map((func) => {
          if (func.id === functionId) {
            // If the function matches the ID, update the name
            return { ...func, viewInside: _viewInside };
          }
          return func;
        });

        // Return the updated contract with the modified functions
        return {
          ...contract,
          props: {
            ...contract.props,
            functions: updatedFunctions,
          },
        };
      }),
    );
    setFunctions((prevFunctions) =>
      prevFunctions.map((func) => {
        // Map through each function to find the one that matches `functionId`
        if (func.props.id === functionId) {
          // If the function matches the ID, update the name
          return {
            ...func,
            props: {
              ...func.props,
              viewInside: _viewInside,
            },
          };
        }
        return func;
      }),
    );
  };

  const getFunctionName = (functionId: string): string => {
    for (const contract of contracts) {
      const foundFunction = contract.props.functions.find(
        (func) => func.id === functionId,
      );
      if (foundFunction) {
        return foundFunction.name; // Retourne le nom si trouvé
      }
    }
    const foundFunction = functions.find(
      (func) => func.props.id === functionId,
    );
    if (foundFunction) {
      return foundFunction.props.name; // Retourne le nom si trouvé
    }
    return ""; // Retourne une chaîne vide si aucun résultat
  };

  const getFunctionView = (functionId: string): boolean => {
    for (const contract of contracts) {
      const foundFunction = contract.props.functions.find(
        (func) => func.id === functionId,
      );
      if (foundFunction) {
        return foundFunction.viewInside; // Retourne le nom si trouvé
      }
    }
    const foundFunction = functions.find(
      (func) => func.props.id === functionId,
    );
    if (foundFunction) {
      return foundFunction.props.viewInside; // Retourne le nom si trouvé
    }
    return true; // Retourne une chaîne vide si aucun résultat
  };

  const updatePosition = (
    functionId: string,
    positionX: number,
    positionY: number,
  ) => {
    setContracts((prevContracts) =>
      prevContracts.map((contract) => {
        // Vérifie si le contrat contient la fonction
        if (contract.props.id === functionId) {
          return {
            ...contract,
            props: {
              ...contract.props,
              position: {
                x: positionX,
                y: positionY,
              },
            },
          };
        }
        // Met à jour la position de la fonction trouvée
        const updatedFunctions = contract.props.functions.map((func) => {
          if (func.id === functionId) {
            return {
              ...func,
              position: { x: positionX, y: positionY },
            };
          }
          return func;
        });
        // Retourne le contrat avec la fonction mise à jour
        return {
          ...contract,
          props: {
            ...contract.props,
            functions: updatedFunctions,
          },
        };
      }),
    );
    setFunctions((prevFunctions) =>
      prevFunctions.map((func) => {
        // Vérifie si la fonction a le même functionId
        if (func.props.id === functionId) {
          return {
            ...func,
            props: {
              ...func.props,
              position: {
                x: positionX,
                y: positionY,
              },
            },
          };
        }
        // Retourne la fonction inchangée si l'ID ne correspond pas
        return func;
      }),
    );
  };

  return (
    <MyContext.Provider
      value={{
        contracts,
        functions,
        addContract,
        addFunction,
        addFunctionToContract,
        delFunctionContract,
        changeFunctionName,
        getFunctionName,
        getFunctionView,
        updatePosition,
        changeFunctionView,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
