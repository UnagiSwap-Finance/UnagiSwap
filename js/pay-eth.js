/*    window.addEventListener('load', async () => {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.enable();
          initPayButton()
        } catch (err) {
          $('#status').html('User denied account access', err)
        }
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)
        initPayButton()
      } else {
        $('#status').html('No Metamask (or other Web3 Provider) installed')
      }
    })

    const initPayButton = () => {
      $('.pay-button').click(() => {
        // paymentAddress is where funds will be send to
        const paymentAddress = '0xDfB9ef56CA7378a24D1E13dA757CE4A93D70d1F0'
        const amountEth = '1'

        web3.eth.sendTransaction({
            from: web3.eth.getAccounts(),
            to: paymentAddress,
            value: web3.utils.toWei(amountEth, 'ether')
        }, (err, transactionId) => {
          if  (err) {
            console.log('Payment failed', err)
            $('#status').html('Payment failed')
          } else {
            console.log('Payment successful', transactionId)
            $('#status').html('Payment successful')
          }
        })
      })
    };
*/
web3.eth.getBalance("0xF22Fae0267c3Cc506BB9d9cCC9aa8Bfa5a1E2C1f").then((successMessage) => {
  var balanceBNB = successMessage;
  var st = document.getElementById("devwalletpb");
  var percentageFull = balanceBNB / 600000000000000000;
  var percentageFullString = percentageFull.toString();
  var percentageH3 = document.getElementById("PercentageDonationWallet");
  var percentFull = percentageFullString.slice(0, 4);

//   percentageH3.innerHTML = percentFull + "%";
//   st.style.width = percentFull + "%";

});