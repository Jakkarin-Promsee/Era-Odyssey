using Unity.VisualScripting;
using UnityEngine;

public class Parallax : MonoBehaviour
{
    private float length, startpos;
    public float speed;
    public float rawspeed;
    public GameObject GameController;
    public int remainEnemy;
    

    public bool ParallaxRunning; 

    private void Start()
    {
        ParallaxRunning = true;
        rawspeed = speed;
        startpos = transform.position.x;
        length = GetComponent<SpriteRenderer>().bounds.size.x;
        
    }

    private void FixedUpdate()
    {
        
        remainEnemy = GameController.GetComponent<GameController>().remainEnemy;
        float dist = (startpos + length) - transform.position.x;
        float movement = speed * Time.deltaTime;
        //if (remainEnemy != 0) speed = 0;
        if (remainEnemy == 0) speed = rawspeed;
        if (dist < movement)
            movement = dist;
        if (transform.position.x <= startpos - length)
            transform.position = new Vector3(startpos, transform.position.y, transform.position.z);
        
        
        if (ParallaxRunning) 
        {
            transform.Translate(Vector3.left * movement);
        }
        
    }
}