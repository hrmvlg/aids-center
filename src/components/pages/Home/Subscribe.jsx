import SubscribeForm from '../../Form/SubscribeForm';

export default function Subscribe({ className }) {
    return (
        <div className={`${className}__subscribe subscribe`}>
            <h4 className='subscribe__title'>ПОДПИШИТЕСЬ НА РАССЫЛКУ</h4>
            <SubscribeForm parentClass="subscribe" />
        </div>
    );
}
