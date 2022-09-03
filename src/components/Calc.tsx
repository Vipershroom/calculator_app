import Button from './Button';
import './css/calc.scss'
function Calc() {
  return (
   <>
   <div className='num-grid'>
        <Button num={7}/>
        <Button num={8}/>
        <Button num={9}/>
        <Button num={'/'} />
        <Button num={4}/>
        <Button num={5}/>
        <Button num={6}/>
        <Button num={'x'} />
        <Button num={1}/>
        <Button num={2}/>
        <Button num={3}/>
        <Button num={'-'} />
        <Button num={0}/>
   </div>
   </>
  );
}


export default Calc;
