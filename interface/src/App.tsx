import { IDKitWidget } from "@worldcoin/idkit";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const [config, setConfig] = useState<any | null>({});

  useEffect(() => {
    if (import.meta.env.VITE_MAIN_CONTRACT_ADDRESS) {
      setConfig({
        MAIN_CONTRACT_ADDRESS: import.meta.env.VITE_MAIN_CONTRACT_ADDRESS,
        APP_ID: import.meta.env.VITE_APP_ID,
        ACTION_ID: import.meta.env.VITE_ACTION_ID,
        RPC_URL: import.meta.env.VITE_RPC_URL,
      });
    }
  }, [import.meta.env]);

  return (
    <>
      <div>
        <div>config:</div>
        <div>{config?.MAIN_CONTRACT_ADDRESS}</div>
        <div>{config?.APP_ID}</div>
        <div>{config?.ACTION_ID}</div>
        <div>{config?.RPC_URL}</div>
        <h2>Account</h2>
        {config && account.address ? (
          <IDKitWidget
            app_id={config.APP_ID}
            action={config.ACTION_ID}
            signal={account.address}
            onSuccess={(result) => console.log(result)} // TODO use onSuccess to call your smart contract
            autoClose={true}
          >
            {({ open }) => <button onClick={open}>Verify with World ID</button>}
          </IDKitWidget>
        ) : null}
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default App;
