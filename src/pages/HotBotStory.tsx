import { motion } from "framer-motion";

const HotBotStory = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto prose prose-pink"
      >
        <h1 className="text-4xl font-playfair text-center mb-12 text-gradient">The HotBot Story</h1>
        
        <div className="space-y-6 text-gray-600">
          <p>Once upon a time, in a bustling town brimming with dreams, three friends embarked on a journey that would test their resolve and deepen their bonds. The trio consisted of a computer genius, his determined girlfriend who was the ultimate doer, and their best friend, a girl who was equally ambitious and hard-working.</p>
          
          <p>The computer guy was a whiz with technology, always brimming with innovative ideas. However, his mind often raced faster than his ability to bring those ideas to life. His girlfriend, the doer, was the perfect counterbalance. She was the one who transformed their dreams into action. While he crafted code and planned their projects, she poured her heart into building their brand, tirelessly managing their best friend's client communications and replying to countless messages. She was the one who turned their dreams into a reality, always showing up with boundless energy and a smile that could light up even the toughest days.</p>
          
          <p>Their best friend, the ambitious girl, worked just as hard—if not harder. She dedicated herself to her own burgeoning career, pouring her energy into building a successful client base while also lending her support to the computer guy and the doer. She was the glue that held them together, constantly pushing them to stay focused on their goals. She believed in their shared vision and inspired them both to keep striving for greatness.</p>
          
          <p>Despite their relentless work ethic, the path was anything but smooth. The weight of their ambitions sometimes felt like a heavy burden. The doer worked late into the night, pouring her heart into replies and strategies to help their best friend grow his client base, while the computer guy wrestled with self-doubt and the pressure to deliver results. He felt guilty that the doer was juggling so many responsibilities while he struggled to keep up with his coding.</p>
          
          <p>As the days turned into weeks, the doer began to feel overwhelmed. She poured her energy into everything she did but felt the strain of their ambitions beginning to take a toll on her spirit. It hurt the computer guy to see her working tirelessly while he grappled with self-doubt and the pressure to create something that could support all of them.</p>
          
          <p>In a moment of vulnerability, the doer decided she needed to step back. The computer guy was devastated. He realized too late just how much he needed her by his side and how essential her presence had been in pushing him to reach his potential. It was a difficult time for all of them, and though the best friend remained supportive, the dynamic felt fractured.</p>
          
          <p>Yet, through the heartache, the computer guy knew he had to honor the doer's hard work and sacrifices. With renewed determination, he sought out his best friend, who reminded him of their shared dreams. Together, they committed to making their vision a reality, motivated by the memories of the doer's unwavering support.</p>
          
          <p>As the weeks went by, they poured everything they had into their project. The best friend helped keep the momentum going, reminding the computer guy of the goal they were working toward and encouraging him not to give up. Despite the pain of the doer stepping away, they pushed through, fueled by their friendship and the shared dream that had brought them all together.</p>
          
          <p>Finally, after months of sleepless nights and countless revisions, they launched their groundbreaking app. It was a moment of triumph, a testament to their hard work and unwavering friendship. Though the doer wasn't there to celebrate with them, her spirit was woven into every line of code and every feature they created.</p>
          
          <p>The computer guy dedicated their success to her, a tribute to the love, energy, and passion she had poured into their journey. It became his way of remembering her smile and all that they had achieved together. In the end, he learned that while dreams might shift and friendships might change, the bonds they forged and the lessons they learned would last a lifetime. Through it all, he discovered that true strength lies in never giving up, no matter how many challenges life throws your way.</p>
          
          <p className="text-center italic mt-12">KkP development a division of k&P development :)</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HotBotStory;