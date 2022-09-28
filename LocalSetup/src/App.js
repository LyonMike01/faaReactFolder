
import "./styles/main.css"


function App() {
  return (

    <div id="main">
    
    <div id="phase1">

      <article class="forms" >

            <form class="amount-input top-form">
                <label class="bill topBill" for="bill-amount">Bill</label>
                <input type="number" class="billInpt buttInpt1" name="amount" id="bill-amount" placeholder="0"
                aria-label="bill-amount" min="0" >
            </form>

            <form class="mid-form">
            <label class="bill midBill">Select Tip %</label>
            <button type="button" class="btn5 tipButt">5</button>
            <button type="button" class="btn10 tipButt">10</button>
            <button type="button" class="btn15 tipButt">15</button>
            <button type="button" class="btn25 tipButt">25</button>
            <button type="button" class="btn50 tipButt">50</button>
            <input  id="custom" class="tipButt custom-pCent" type="number" max="100" placeholder="Custom"
              aria-label="enter-custom-input" min="1" />
            </form>

            <form class="num-people butt-form">
                <label for="people-count" class="bill buttBill">Number of People <span>Can't be zero</span></label>
                <input type="number" class="billInpt buttInpt2" type="number" name="number-people" id="people-count" placeholder="0" aria-label="enter-number-of-people" required aria-required="true" min="0" max="100" />
            </form>

      </article>
      

    </div>

    <div id="phase2">

          <div class="phase2_cont1">
              <div class="tipAmount1"> 
                  <p class="perPerson">Tip Amount <br> <span class="subTip">/ person</span></p>
              </div>
              <p class="amount fig-amount">$0.00</p>
      
          </div>

          <div class="phase2_cont2">
              <div class="tipAmount1"> 
                  <p class="perPerson">Total<br><span class="subTip">/ person</span></p>
              </div>
              <p class="amount total-amount">$0.00</p>
          </div>
          <div>
      <button type="submit" class="reset" disabled> Reset </button>

    </div>
    </div>

    </div>

    
  );
}

export default App;
02