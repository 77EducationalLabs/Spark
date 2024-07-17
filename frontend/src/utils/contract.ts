import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "./client";

export const contract = getContract({
  client,
  chain: defineChain(11155111), 
  address: "0x9698D1A7ACBE4C1632815A385Ca9C197f3BB7062",
  abi: [
      {
        "type": "constructor",
        "inputs": [
          { "name": "_usdc", "type": "address", "internalType": "address" },
          {
            "name": "_vrfCoordinator",
            "type": "address",
            "internalType": "address"
          },
          { "name": "_router", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "acceptOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "adoptCampain",
        "inputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" },
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "athleteRegister",
        "inputs": [
          {
            "name": "_walletToReceiveDonation",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" },
          { "name": "_requestId", "type": "bytes32", "internalType": "bytes32" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "benefactorRegister",
        "inputs": [],
        "outputs": [
          { "name": "_requestId", "type": "bytes32", "internalType": "bytes32" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "createCampaign",
        "inputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" },
          { "name": "_amount", "type": "uint256", "internalType": "uint256" },
          { "name": "_duration", "type": "uint256", "internalType": "uint256" },
          { "name": "_reason", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "donate",
        "inputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" },
          {
            "name": "_token",
            "type": "address",
            "internalType": "contract IERC20"
          },
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "getAthleteInfos",
        "inputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          {
            "name": "athlete",
            "type": "tuple",
            "internalType": "struct Spark.Athlete",
            "components": [
              {
                "name": "dateOfRegister",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "donationsReceived",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "sponsorsAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "validatedAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountSpent",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "sparkFactor",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "athleteWallet",
                "type": "address",
                "internalType": "address"
              },
              { "name": "isValidated", "type": "bool", "internalType": "bool" }
            ]
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "getRequestStatus",
        "inputs": [
          { "name": "_requestId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          { "name": "fulfilled", "type": "bool", "internalType": "bool" },
          { "name": "randomWords", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "getSponsorInfo",
        "inputs": [
          { "name": "_sponsorId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          {
            "name": "sponsors",
            "type": "tuple",
            "internalType": "struct Spark.Sponsors",
            "components": [
              {
                "name": "dateOfRegister",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountSponsored",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "sparkFactor",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "sponsorWallet",
                "type": "address",
                "internalType": "address"
              },
              { "name": "isValidated", "type": "bool", "internalType": "bool" }
            ]
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "handleOracleFulfillment",
        "inputs": [
          { "name": "requestId", "type": "bytes32", "internalType": "bytes32" },
          { "name": "response", "type": "bytes", "internalType": "bytes" },
          { "name": "err", "type": "bytes", "internalType": "bytes" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "obtainSparks",
        "inputs": [
          {
            "name": "_token",
            "type": "address",
            "internalType": "contract IERC20"
          },
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "rawFulfillRandomWords",
        "inputs": [
          { "name": "requestId", "type": "uint256", "internalType": "uint256" },
          {
            "name": "randomWords",
            "type": "uint256[]",
            "internalType": "uint256[]"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "redeemAmount",
        "inputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" },
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "requestRandomWords",
        "inputs": [],
        "outputs": [
          { "name": "_requestId", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "s_athleteIdentification",
        "inputs": [
          { "name": "athleteId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          {
            "name": "athleteWallet",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_athletes",
        "inputs": [
          {
            "name": "athleteAddress",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "dateOfRegister",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "donationsReceived",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sponsorsAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "validatedAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "amountSpent", "type": "uint256", "internalType": "uint256" },
          { "name": "sparkFactor", "type": "uint256", "internalType": "uint256" },
          {
            "name": "athleteWallet",
            "type": "address",
            "internalType": "address"
          },
          { "name": "isValidated", "type": "bool", "internalType": "bool" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_benefactors",
        "inputs": [
          {
            "name": "benefactorAddress",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "dateOfRegister",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "donatedAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "benefactorWallet",
            "type": "address",
            "internalType": "address"
          },
          { "name": "isValidated", "type": "bool", "internalType": "bool" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_campaings",
        "inputs": [
          { "name": "athleteId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          {
            "name": "targetAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "receivedAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "duration", "type": "uint256", "internalType": "uint256" },
          { "name": "reason", "type": "bytes", "internalType": "bytes" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_clfRequest",
        "inputs": [
          { "name": "requestId", "type": "bytes32", "internalType": "bytes32" }
        ],
        "outputs": [
          { "name": "user", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_donationsRegister",
        "inputs": [
          { "name": "giver", "type": "address", "internalType": "address" }
        ],
        "outputs": [
          { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_requests",
        "inputs": [
          { "name": "requestId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          { "name": "randomWords", "type": "uint256", "internalType": "uint256" },
          {
            "name": "selectedNumber",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "fulfilled", "type": "bool", "internalType": "bool" },
          { "name": "exists", "type": "bool", "internalType": "bool" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_sponsorIdentification",
        "inputs": [
          { "name": "sponsorId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
          {
            "name": "sponsorWallet",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_sponsors",
        "inputs": [
          {
            "name": "sponsorAddress",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "dateOfRegister",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountSponsored",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "sparkFactor", "type": "uint256", "internalType": "uint256" },
          {
            "name": "sponsorWallet",
            "type": "address",
            "internalType": "address"
          },
          { "name": "isValidated", "type": "bool", "internalType": "bool" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "s_vrfCoordinator",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "contract IVRFCoordinatorV2Plus"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "setCoordinator",
        "inputs": [
          {
            "name": "_vrfCoordinator",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "sponsor",
        "inputs": [
          { "name": "_athleteId", "type": "uint256", "internalType": "uint256" },
          { "name": "_shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "sponsorRegister",
        "inputs": [
          {
            "name": "_sponsorWallet",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          { "name": "_sponsorId", "type": "uint256", "internalType": "uint256" },
          { "name": "_requestId", "type": "bytes32", "internalType": "bytes32" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
          { "name": "to", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "CoordinatorSet",
        "inputs": [
          {
            "name": "vrfCoordinator",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "OwnershipTransferRequested",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "RequestFulfilled",
        "inputs": [
          {
            "name": "id",
            "type": "bytes32",
            "indexed": true,
            "internalType": "bytes32"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "RequestSent",
        "inputs": [
          {
            "name": "id",
            "type": "bytes32",
            "indexed": true,
            "internalType": "bytes32"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_AmountRedeemed",
        "inputs": [
          {
            "name": "athleteId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "amount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_AthleteRegistered",
        "inputs": [
          {
            "name": "athleteId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_BenefactorRegistered",
        "inputs": [
          {
            "name": "benefactorAddress",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_BenefactorRewarded",
        "inputs": [
          {
            "name": "winnerAddress",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          },
          {
            "name": "amountToPay",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_CampaingAdopted",
        "inputs": [
          {
            "name": "athleteId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "amount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_NewCampaignCreated",
        "inputs": [
          {
            "name": "athleteId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "reason",
            "type": "string",
            "indexed": false,
            "internalType": "string"
          },
          {
            "name": "duration",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "amount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_Response",
        "inputs": [
          {
            "name": "requestId",
            "type": "bytes32",
            "indexed": false,
            "internalType": "bytes32"
          },
          {
            "name": "response",
            "type": "bytes",
            "indexed": false,
            "internalType": "bytes"
          },
          {
            "name": "err",
            "type": "bytes",
            "indexed": false,
            "internalType": "bytes"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_SparksObtained",
        "inputs": [
          {
            "name": "amount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_SponsorAthlete",
        "inputs": [
          {
            "name": "athleteId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "shares",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_SponsorRegistered",
        "inputs": [
          {
            "name": "sponsor",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spark_SuccessFulDonation",
        "inputs": [
          {
            "name": "athleteId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "amount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spart_RequestFulfilled",
        "inputs": [
          {
            "name": "requestId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "randomWords",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "selectedNumber",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Spart_RequestSent",
        "inputs": [
          {
            "name": "requestId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "numWords",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
          { "name": "target", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
          { "name": "account", "type": "address", "internalType": "address" }
        ]
      },
      { "type": "error", "name": "EmptyArgs", "inputs": [] },
      { "type": "error", "name": "EmptySource", "inputs": [] },
      { "type": "error", "name": "FailedInnerCall", "inputs": [] },
      { "type": "error", "name": "NoInlineSecrets", "inputs": [] },
      {
        "type": "error",
        "name": "OnlyCoordinatorCanFulfill",
        "inputs": [
          { "name": "have", "type": "address", "internalType": "address" },
          { "name": "want", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "OnlyOwnerOrCoordinator",
        "inputs": [
          { "name": "have", "type": "address", "internalType": "address" },
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "coordinator", "type": "address", "internalType": "address" }
        ]
      },
      { "type": "error", "name": "OnlyRouterCanFulfill", "inputs": [] },
      {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
          { "name": "token", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "Spark_BenefactorAlreadyRegistered",
        "inputs": [
          {
            "name": "benefactorAddress",
            "type": "address",
            "internalType": "address"
          }
        ]
      },
      {
        "type": "error",
        "name": "Spark_CallerIsNotTheAthlete",
        "inputs": [
          { "name": "caller", "type": "address", "internalType": "address" },
          { "name": "athlete", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "Spark_CampaingCapReached",
        "inputs": [
          {
            "name": "targetAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "receivedAmount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "type": "error",
        "name": "Spark_InsuficientBalanceToWithdraw",
        "inputs": [
          { "name": "amount", "type": "uint256", "internalType": "uint256" },
          {
            "name": "amountReceived",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountValidated",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "type": "error", "name": "Spark_InvalidCampaing", "inputs": [] },
      {
        "type": "error",
        "name": "Spark_ReceivedSponsorshipIsNotEnough",
        "inputs": [
          { "name": "amount", "type": "uint256", "internalType": "uint256" },
          {
            "name": "sparkTokenBalance",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "type": "error",
        "name": "Spark_RequestNotFound",
        "inputs": [
          { "name": "requestId", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "Spark_UnexpectedRequestID",
        "inputs": [
          { "name": "requestId", "type": "bytes32", "internalType": "bytes32" }
        ]
      },
      { "type": "error", "name": "ZeroAddress", "inputs": [] }
    ]
});


