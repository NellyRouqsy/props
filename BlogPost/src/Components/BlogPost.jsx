import PropsThree from "../propsThree/propsThree";
import "./BlogPost.css"
const BlogPost = () => {
    return (
        <div className="Post">
            <PropsThree Title="The Underground Railroad" Author="Colson Whitehead" Content="Whitehead's innovative novel reimagines the historical Underground Railroad as an actual train system. Through the harrowing journey of Cora, a runaway slave, the story explores the brutal realities of slavery while celebrating the resilience of the human spirit. The blend of history and fantasy creates a powerful narrative that compels readers to confront the past and its lingering effects on society." Date="Year: 2016" Styles="style1"/>
            <PropsThree Title="Harry Potter and the Philosopher's Stone" Author="J.K. Rowling" Content="The first installment of Rowling's beloved series introduces readers to the magical world of Hogwarts and the journey of young Harry Potter. With themes of friendship, bravery, and the struggle between good and evil, this book ignited a passion for reading in a generation. Its imaginative storytelling and relatable characters continue to captivate audiences of all ages." Date="Year: 1997" Styles="style2"/>
            <PropsThree Title="The Kite Runner" Author="Khaled Hosseini" Content="This poignant tale of friendship and betrayal unfolds against the backdrop of a changing Afghanistan. Hosseini beautifully captures the complexities of love and guilt through the protagonist, Amir. The exploration of cultural identity and the search for redemption provides a powerful commentary on the human experience, making it a compelling read." Date="Year: 2003" Styles="style3"/>
            <PropsThree Title="Educated" Author=" Tara Westover" Content="Westover’s memoir recounts her journey from a survivalist upbringing in rural Idaho to earning a PhD from Cambridge University. Her story is one of resilience, highlighting the transformative power of education against all odds. The raw honesty in her writing invites readers to reflect on the complexities of family loyalty and the pursuit of knowledge." Date="Year: 2018" Styles="style4"/>
            <PropsThree Title="To Kill a Mockingbird" Author="Harper Lee" Content="Set in the Deep South during the 1930s, Lee’s novel tackles complex issues of racism and moral integrity through the eyes of young Scout Finch. The portrayal of her father, Atticus Finch, as a moral beacon highlights the struggle for justice and empathy. Its timeless lessons about humanity and compassion continue to resonate powerfully today." Date="Year: 1960" Styles="style5"/>
            <PropsThree Title="The Road" Author="Cormac McCarthy" Content="This stark, post-apocalyptic tale follows a father and son as they navigate a desolate landscape. McCarthy’s sparse, poetic prose creates an atmosphere of haunting beauty amid despair. The themes of love, sacrifice, and the will to survive shine through, making it a gripping exploration of humanity in its darkest hour." Date="Year: 2007" Styles="style6"/>
           
        </div>
    );
};

export default BlogPost;